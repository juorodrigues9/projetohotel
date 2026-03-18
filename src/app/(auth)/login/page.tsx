import { loginAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form action={loginAction} className="w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Acesso ao sistema</h1>
        <p className="text-sm text-slate-600">Entre com e-mail e senha para continuar.</p>
        <div className="space-y-2">
          <label className="text-sm font-medium">E-mail</label>
          <Input name="email" type="email" placeholder="recepcao@pousada.com" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Senha</label>
          <Input name="password" type="password" required />
        </div>
        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
