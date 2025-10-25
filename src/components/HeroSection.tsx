import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                ⚡ Автоматизация найма
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Найм персонала{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                в 10 раз быстрее
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Публикуйте вакансии на hh.ru, Avito, Яндекс.Услуги и VK Работа одним кликом. 
              Автоматическая фильтрация откликов и управление кандидатами в едином интерфейсе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Попробовать бесплатно
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={20} />
                <span className="text-sm">Без кода</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={20} />
                <span className="text-sm">Быстрый старт</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={20} />
                <span className="text-sm">От 990₽/мес</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-card border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Globe" className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted/60 rounded w-1/2"></div>
                  </div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 pl-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                      <Icon name="User" className="text-secondary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-muted/60 rounded w-1/3"></div>
                    </div>
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
