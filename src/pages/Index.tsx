import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
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

      <section id="faq" className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Вопросы и ответы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на частые вопросы о HR-Коннектор
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Нужно ли знать программирование для работы с платформой?',
                a: 'Нет, HR-Коннектор — это no-code решение. Вы создаете вакансию через простую форму, и система автоматически публикует её на всех площадках. Никаких технических знаний не требуется.'
              },
              {
                q: 'На каких площадках публикуются вакансии?',
                a: 'Мы интегрированы с hh.ru, Avito, Яндекс.Услуги и VK Работа. В зависимости от тарифа, вакансия публикуется на 3-5+ площадках одновременно.'
              },
              {
                q: 'Как работает автоматическая фильтрация?',
                a: 'Вы задаете критерии (опыт работы, график, навыки), и система анализирует резюме кандидатов. Подходящие отклики попадают в ваш интерфейс, остальные фильтруются автоматически.'
              },
              {
                q: 'Можно ли попробовать бесплатно?',
                a: 'Да, мы предоставляем 14-дневный пробный период на тарифе "Профессиональный" без привязки карты. Вы сможете оценить все возможности платформы.'
              },
              {
                q: 'Как быстро можно запустить первую вакансию?',
                a: 'После регистрации вы можете создать и опубликовать вакансию буквально за 5 минут. Система проведет вас через все этапы настройки.'
              },
              {
                q: 'Что делать, если у меня несколько точек бизнеса?',
                a: 'Вы можете управлять вакансиями для разных локаций из одного аккаунта. На тарифе "Профессиональный" доступно до 3 активных вакансий одновременно.'
              },
              {
                q: 'Какая поддержка предусмотрена?',
                a: 'На всех тарифах доступна поддержка в чате. На тарифе "Профессиональный" — приоритетная поддержка. В "Пакете найма" предоставляется персональный менеджер.'
              },
              {
                q: 'Можно ли отменить подписку?',
                a: 'Да, вы можете отменить подписку в любой момент из личного кабинета. Неиспользованные дни не возвращаются, но доступ сохраняется до конца оплаченного периода.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Остались вопросы?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами в течение рабочего дня. 
                Или напишите нам напрямую в удобный мессенджер.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">support@hr-konnector.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Telegram</p>
                    <p className="text-muted-foreground">@hrkonnector_support</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы ответим в течение рабочего дня</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <span className="text-lg font-bold">HR-Коннектор</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Автоматизация найма линейного персонала для малого и среднего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#cases" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 HR-Коннектор. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
