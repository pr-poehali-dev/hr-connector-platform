import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Возможности платформы
          </h2>
          <p className="text-lg text-muted-foreground">
            Всё необходимое для эффективного найма линейного персонала
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'Zap',
              title: 'Публикация в один клик',
              description: 'Разместите вакансию на hh.ru, Avito, Яндекс.Услуги, VK Работа одновременно'
            },
            {
              icon: 'Filter',
              title: 'Умная фильтрация',
              description: 'Автоматический отбор кандидатов по опыту, графику и другим критериям'
            },
            {
              icon: 'MessageSquare',
              title: 'Единый интерфейс',
              description: 'Все отклики в одном чат-подобном интерфейсе. Никаких переключений'
            },
            {
              icon: 'Send',
              title: 'Авто-приглашения',
              description: 'Автоматическая отправка приглашений на собеседование и отказов'
            },
            {
              icon: 'BarChart3',
              title: 'Аналитика найма',
              description: 'Отслеживайте эффективность площадок и скорость закрытия вакансий'
            },
            {
              icon: 'Bell',
              title: 'Telegram-уведомления',
              description: 'Мгновенные уведомления о подходящих кандидатах в Telegram'
            }
          ].map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
