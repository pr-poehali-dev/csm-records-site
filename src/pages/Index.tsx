import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">CSM RECORDS</h1>
            <div className="flex gap-6">
              <a href="#services" className="text-black hover:text-accent transition-colors">Услуги</a>
              <a href="#studio" className="text-black hover:text-accent transition-colors">Студия</a>
              <a href="#contacts" className="text-black hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tight">
              CSM RECORDS
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Профессиональная студия звукозаписи, продюсирования и производства музыкальных клипов
            </p>
            <div className="bg-gradient-to-r from-black to-red-600 h-2 w-32 mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mic" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Запись вокала</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Профессиональная запись вокала в акустически обработанной студии с современным оборудованием
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Продюсирование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Полный цикл создания трека: аранжировка, сведение, мастеринг и творческое продюсирование
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Video" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Съёмка клипов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Профессиональная съёмка музыкальных клипов по всей России с полным циклом постпродакшена
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Студия в Калуге</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Студия находится в городе Калуга, оснащена профессиональным оборудованием для создания музыки любых жанров. Акустически обработанные помещения, современные микрофоны и мониторы обеспечивают идеальное качество звука.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Акустически обработанная студия</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Профессиональное оборудование</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Опытные звукорежиссёры</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/8599b1bb-58b8-46ef-b2cf-615600cf0156.jpg" 
                alt="Студия звукозаписи CSM Records" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Production Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/img/6074af24-a94b-486d-9a27-6967fa111e59.jpg" 
                alt="Съёмка музыкальных клипов" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-black mb-8">Съёмка по всей России</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы снимаем музыкальные клипы в любой точке России. Наша команда профессиональных 
                операторов, режиссёров и монтажёров создаёт визуальные истории, которые идеально 
                дополняют вашу музыку.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Выезд в любой город России</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Профессиональная команда</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-gray-700">Полный цикл постпродакшена</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-8">Готовы создать хит?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Свяжитесь с нами для обсуждения вашего проекта и получения персонального предложения
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-red-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Оплатить услуги
          </Button>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Контакты</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-300">Калуга, Россия</p>
              </div>
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-300">+7-965-700-86-05
+7-901-995-57-34</p>
              </div>
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">info@csmrecords.ru</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black transition-colors"
                asChild
              >
                <a href="https://t.me/csmrecords" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black transition-colors"
                asChild
              >
                <a href="https://vk.com/csmrecords" target="_blank" rel="noopener noreferrer">
                  <Icon name="Users" size={20} className="mr-2" />
                  VKontakte
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 CSM Records. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}