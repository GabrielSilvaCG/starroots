import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Coffee, Cookie, Leaf, Lock, ShieldCheck } from "lucide-react";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/comprar")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Comprar Combo Starroots — R$12,50" },
      { name: "description", content: "Finalize a compra do seu Combo Starroots: copo biodegradável + cookie artesanal personalizado com o seu nome." },
      { property: "og:title", content: "Comprar Combo Starroots — R$12,50" },
      { property: "og:description", content: "Copo biodegradável + cookie personalizado. Sustentabilidade que cabe no seu dia." },
    ],
  }),
});

const drinks = [
  { id: "cappuccino", name: "Cappuccino" },
  { id: "latte", name: "Latte Vanilla" },
  { id: "americano", name: "Americano" },
  { id: "mocha", name: "Mocha" },
];

function CheckoutPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cookieName, setCookieName] = useState("");
  const [email, setEmail] = useState("");
  const [drink, setDrink] = useState("cappuccino");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1200);
  };

  if (done) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-16 leaf-bg">
        <div className="max-w-lg w-full bg-card border border-border rounded-2xl p-10 text-center shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Pedido confirmado!</h1>
          <p className="text-foreground/80 mb-2">
            Obrigado, <span className="text-accent font-semibold">{name || "amigo Starroots"}</span>.
          </p>
          <p className="text-muted-foreground mb-8">
            Seu Combo estará pronto em breve. Apresente este e-mail na unidade participante mais próxima.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/">Voltar ao site</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12 md:py-16 leaf-bg">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>

        <div className="grid md:grid-cols-[1fr,420px] gap-10">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-2">Checkout</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Finalize seu <span className="text-gradient">Combo Starroots</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="mb-2 block">Seu nome completo</Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 block">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@email.com"
                />
              </div>

              <div>
                <Label htmlFor="cookieName" className="mb-2 block">
                  Nome para o cookie <span className="text-muted-foreground text-xs">(até 12 caracteres)</span>
                </Label>
                <Input
                  id="cookieName"
                  required
                  maxLength={12}
                  value={cookieName}
                  onChange={(e) => setCookieName(e.target.value)}
                  placeholder="Ex: Maria"
                />
              </div>

              <div>
                <Label className="mb-3 block">Escolha sua bebida</Label>
                <RadioGroup value={drink} onValueChange={setDrink} className="grid grid-cols-2 gap-3">
                  {drinks.map((d) => (
                    <label
                      key={d.id}
                      htmlFor={d.id}
                      className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all ${
                        drink === d.id ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <RadioGroupItem value={d.id} id={d.id} />
                      <span className="text-sm">{d.name}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 py-6 text-base tracking-wider uppercase"
              >
                {submitting ? "Processando..." : "Pagar R$12,50"}
              </Button>

              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5" /> Pagamento simulado para esta demonstração
              </p>
            </form>
          </div>

          {/* Order summary */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4 pb-5 border-b border-border">
                <div className="w-16 h-16 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <img src={logoImg} alt="Combo Starroots" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent">Edição Exclusiva</p>
                  <h2 className="font-display text-xl font-semibold">Combo Starroots</h2>
                </div>
              </div>

              <ul className="space-y-3 py-5 text-sm text-foreground/85 border-b border-border">
                <li className="flex items-start gap-3">
                  <Coffee className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  Bebida no copo biodegradável numerado
                </li>
                <li className="flex items-start gap-3">
                  <Cookie className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  Cookie artesanal com seu nome
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  Apoio à logística sustentável
                </li>
              </ul>

              <div className="pt-5 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>R$12,50</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Taxa</span>
                  <span>Grátis</span>
                </div>
                <div className="flex justify-between items-end pt-3 border-t border-border">
                  <span className="font-display text-lg">Total</span>
                  <span className="font-display text-3xl font-bold text-accent">R$12,50</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 text-sm text-foreground/85 flex gap-3">
              <Leaf className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p>
                Seu copo de hoje vira o <span className="text-accent">adubo do café de amanhã</span>. Cada compra financia a economia circular Starroots.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
