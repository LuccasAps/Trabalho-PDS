import { Button } from "@/components/ui/button";
import { Container } from "@/components/container"

export default function Home() {
  return (
    <Container>
      <main className="bg-white dark:bg-zinc-900">
        <Button>Meu primeiro botão 🎉</Button>
        <Button variant="outline">Botão estilo outline</Button>
        <Button variant="destructive">Botão destrutivo</Button>
        <Button size="lg">Botão grande</Button>
        <div>
          Apenas testando!
        </div>
      </main>
    </Container>
  );
}
