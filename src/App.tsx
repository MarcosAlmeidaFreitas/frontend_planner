import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide os seus amigos e planeja a sua próxima viagem!</p>
        
        <div className="p-4 flex h-16 bg-zinc-900 px-4 rounded-xl items-center shadow-shape">
          <Input type="text" placeholder="Para onde você vai" className="border-none"></Input>
          <Input type="text" placeholder="Quando" className="border-none"></Input>
          <Button className="">Continuar</Button>
        </div>

        <p className="text-sm text-zinc-400">
          Ao planejar a sua viagem pela <span className="text-purple-300 font-bold italic">plann.er</span> você
          automaticamente concorda <br /> 
          com os nossos <a href="#" className="text-zinc-200 underline">termos de uso </a>  
          e <a href="#" className="text-zinc-300 underline" > políticas de privacidade</a>.
        </p>
      </div>
    </main>
  )
}