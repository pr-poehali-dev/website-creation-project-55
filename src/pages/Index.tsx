import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">MyBrand</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition">Главная</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition">Портфолио</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Контакты</button>
          </div>
          <Button size="sm" onClick={() => scrollToSection('contact')}>Связаться</Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Создаём цифровые решения
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Разработка современных сайтов и приложений для вашего бизнеса
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('services')} className="gap-2">
              <Icon name="Sparkles" size={20} />
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="gap-2">
              <Icon name="Eye" size={20} />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Code',
                title: 'Веб-разработка',
                description: 'Создание современных сайтов и веб-приложений с использованием новейших технологий'
              },
              {
                icon: 'Smartphone',
                title: 'Мобильные приложения',
                description: 'Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android'
              },
              {
                icon: 'Palette',
                title: 'UI/UX Дизайн',
                description: 'Проектирование интуитивных и привлекательных пользовательских интерфейсов'
              },
              {
                icon: 'Rocket',
                title: 'SEO продвижение',
                description: 'Оптимизация и продвижение вашего сайта в поисковых системах'
              },
              {
                icon: 'ShoppingCart',
                title: 'E-commerce',
                description: 'Создание интернет-магазинов с удобной системой управления и оплаты'
              },
              {
                icon: 'BarChart',
                title: 'Аналитика',
                description: 'Настройка систем аналитики для отслеживания эффективности вашего бизнеса'
              }
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <Icon name="Image" size={48} className="text-muted-foreground/30" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="gap-2">
                        <Icon name="ExternalLink" size={16} />
                        Посмотреть
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">Проект #{i + 1}</h3>
                    <p className="text-sm text-muted-foreground">Описание выполненного проекта и использованных технологий</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@mybrand.ru</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Москва, Россия</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={20} />
                    Отправить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 MyBrand. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
