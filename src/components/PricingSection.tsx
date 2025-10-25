import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Тарифы и цены
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий план для вашего бизнеса
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Базовый',
              price: '990',
              period: 'месяц',
              description: 'Для малого бизнеса',
              features: [
                '1 активная вакансия',
                'Публикация на 3 площадках',
                'Базовая фильтрация',
                'Email-уведомления',
                'Поддержка в чате'
              ],
              popular: false
            },
            {
              name: 'Профессиональный',
              price: '2990',
              period: 'месяц',
              description: 'Самый популярный',
              features: [
                '3 активные вакансии',
                'Публикация на 5+ площадках',
                'Расширенная фильтрация',
                'Авто-отправка сообщений',
                'Telegram-уведомления',
                'Аналитика и отчеты',
                'Приоритетная поддержка'
              ],
              popular: true
            },
            {
              name: 'Пакет найма',
              price: '5900',
              period: 'вакансия',
              description: 'Разовый поиск',
              features: [
                'Поиск 1 сотрудника',
                'Все площадки',
                'VIP-размещение',
                'SMS-приглашения',
                'Персональный менеджер',
                'Гарантия результата'
              ],
              popular: false
            }
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : 'border-2'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}₽</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
