import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CasesSection = () => {
  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Кейсы клиентов
          </h2>
          <p className="text-lg text-muted-foreground">
            Реальные истории успеха наших клиентов
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              company: 'Кофейня "Бодрость"',
              industry: 'HoReCa',
              result: 'Сократили время найма бариста с 2 недель до 3 дней',
              quote: 'Раньше тратили по 5 часов в день на просмотр откликов. Теперь система сама фильтрует кандидатов, и мы видим только подходящих.',
              author: 'Анна Смирнова',
              position: 'Управляющая'
            },
            {
              company: 'Сеть магазинов "Продукты 24"',
              industry: 'Ритейл',
              result: 'Закрыли 12 вакансий кассиров за неделю',
              quote: 'С HR-Коннектор мы наняли весь персонал для открытия нового магазина всего за 5 дней. Это рекорд для нас!',
              author: 'Дмитрий Козлов',
              position: 'HR-директор'
            },
            {
              company: 'Курьерская служба "Быстро"',
              industry: 'Логистика',
              result: 'Наняли 25 курьеров за месяц вместо обычных 50',
              quote: 'Telegram-уведомления — это просто находка. Реагируем на отклики мгновенно и не упускаем лучших кандидатов.',
              author: 'Олег Петров',
              position: 'Операционный директор'
            },
            {
              company: 'Производство "МебельМастер"',
              industry: 'Производство',
              result: 'Экономия 45 000₽ в месяц на публикации вакансий',
              quote: 'Платили каждой площадке отдельно — выходило дорого. Теперь одна подписка закрывает все наши потребности.',
              author: 'Виктор Иванов',
              position: 'Собственник'
            }
          ].map((caseItem, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{caseItem.company}</CardTitle>
                    <CardDescription>{caseItem.industry}</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3 mt-4">
                  <p className="text-sm font-semibold text-secondary-foreground">
                    {caseItem.result}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">"{caseItem.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{caseItem.author}</p>
                    <p className="text-xs text-muted-foreground">{caseItem.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
