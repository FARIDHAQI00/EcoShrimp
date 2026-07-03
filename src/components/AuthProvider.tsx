"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Role, Permission } from "@/lib/auth/roles";

export interface SessionUser {
  id: string;
  name: string;
  phone: string;
  email?: string;
  location: string;
  role: Role;
  points: number;
  createdAt: string;
}

interface AuthState {
  user: SessionUser | null;
  permissions: Permission[];
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
  setSession: (user: SessionUser, permissions: Permission[]) => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMe = useCallback(async () => {
    try {
      let res = await fetch("/api/auth/me", { cache: "no-store" });
      let data = await res.json();
      // Access token kedaluwarsa tapi refresh masih berlaku → perbarui lalu ambil ulang.
      if (!data.user) {
        const r = await fetch("/api/auth/refresh", { method: "POST" });
        if (r.ok) {
          res = await fetch("/api/auth/me", { cache: "no-store" });
          data = await res.json();
        }
      }
      setUser(data.user ?? null);
      setPermissions(data.permissions ?? []);
    } catch {
      setUser(null);
      setPermissions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMe();
  }, [loadMe]);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setPermissions([]);
  }, []);

  const setSession = useCallback((u: SessionUser, perms: Permission[]) => {
    setUser(u);
    setPermissions(perms);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, permissions, loading, refresh: loadMe, logout, setSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth harus dipakai di dalam <AuthProvider>");
  return ctx;
}

export function useCan(perm: Permission): boolean {
  const { permissions } = useAuth();
  return permissions.includes(perm);
}
