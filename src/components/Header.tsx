import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Icon name="Users" className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HR-Коннектор
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
          <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button className="hidden md:flex">Начать бесплатно</Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
