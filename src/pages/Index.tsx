import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'welcome' | 'greetings' | 'gallery' | 'surprise' | 'video'>('welcome');
  const [showConfetti, setShowConfetti] = useState(true);
  const [backgroundVideo, setBackgroundVideo] = useState<string | null>(null);
  const [welcomeBackgroundVideo, setWelcomeBackgroundVideo] = useState<string | null>(null);

  const confettiColors = ['#9b87f5', '#D946EF', '#F97316', '#0EA5E9', '#FEC6A1', '#E5DEFF'];

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file);
      setBackgroundVideo(videoUrl);
    }
  };

  const handleWelcomeVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file);
      setWelcomeBackgroundVideo(videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">

      {currentSection === 'welcome' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in relative">
          {welcomeBackgroundVideo && (
            <video
              src={welcomeBackgroundVideo}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          )}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="text-center space-y-8 max-w-2xl relative z-20">
            <div className="animate-float">
              <h1 className="text-7xl font-bold text-white drop-shadow-2xl mb-4">
                С Днём Рождения! 🎉
              </h1>
            </div>
            <p className="text-2xl text-white drop-shadow-lg font-medium">
              Специальная открытка для особенного человека
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 animate-scale-in"
                onClick={() => setCurrentSection('greetings')}
              >
                <Icon name="Heart" className="mr-2" size={24} />
                Открыть подарок
              </Button>
              <label htmlFor="welcome-video-upload">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/90 hover:bg-white cursor-pointer"
                  asChild
                >
                  <span>
                    <Icon name="Upload" className="mr-2" size={24} />
                    Загрузить фоновое видео
                  </span>
                </Button>
              </label>
              <input
                id="welcome-video-upload"
                type="file"
                accept="video/*"
                onChange={handleWelcomeVideoUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>
      )}

      {currentSection !== 'welcome' && (
        <div className="min-h-screen p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2 mb-8 flex-wrap justify-center">
              <Button
                variant={currentSection === 'greetings' ? 'default' : 'outline'}
                onClick={() => setCurrentSection('greetings')}
                className="gap-2"
              >
                <Icon name="MessageCircleHeart" size={20} />
                Поздравления
              </Button>
              <Button
                variant={currentSection === 'gallery' ? 'default' : 'outline'}
                onClick={() => setCurrentSection('gallery')}
                className="gap-2"
              >
                <Icon name="Images" size={20} />
                Фотогалерея
              </Button>
              <Button
                variant={currentSection === 'surprise' ? 'default' : 'outline'}
                onClick={() => setCurrentSection('surprise')}
                className="gap-2"
              >
                <Icon name="Gift" size={20} />
                Сюрприз
              </Button>
              <Button
                variant={currentSection === 'video' ? 'default' : 'outline'}
                onClick={() => setCurrentSection('video')}
                className="gap-2"
              >
                <Icon name="Video" size={20} />
                Видео
              </Button>
            </div>

            {currentSection === 'greetings' && (
              <div className="animate-fade-in space-y-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Поздравления для тебя 💝
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: 'Sparkles', text: 'Желаю тебе счастья, здоровья и исполнения всех мечтаний!', color: 'from-purple-400 to-pink-400' },
                    { icon: 'Star', text: 'Пусть каждый день приносит радость и новые возможности!', color: 'from-pink-400 to-orange-400' },
                    { icon: 'Heart', text: 'Ты делаешь этот мир лучше просто своим присутствием!', color: 'from-orange-400 to-blue-400' },
                    { icon: 'Crown', text: 'Желаю тебе всегда оставаться таким же особенным человеком!', color: 'from-blue-400 to-purple-400' }
                  ].map((wish, i) => (
                    <Card key={i} className="hover:scale-105 transition-transform duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${wish.color} flex items-center justify-center mb-4`}>
                          <Icon name={wish.icon as any} className="text-white" size={24} />
                        </div>
                        <p className="text-lg font-medium">{wish.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'gallery' && (
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Наши моменты 📸
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center">
                          <Icon name="Camera" size={48} className="text-white/50" />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground">Памятный момент #{i + 1}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentSection === 'surprise' && (
              <div className="animate-fade-in max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Особый сюрприз 🎁
                </h2>
                <Card className="animate-scale-in">
                  <CardContent className="p-12 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center animate-float">
                      <Icon name="Gift" size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Твой особенный подарок!</h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      Здесь будет что-то по-настоящему особенное... 🌟
                    </p>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl">
                      <p className="text-2xl font-semibold mb-2">🎊 Сюрприз! 🎊</p>
                      <p className="text-lg">
                        [Здесь можно разместить промокод, специальное предложение, или секретное послание]
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentSection === 'video' && (
              <div className="animate-fade-in max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Видеопоздравление 🎬
                </h2>
                <Card className="animate-scale-in">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      {backgroundVideo ? (
                        <video
                          src={backgroundVideo}
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 flex flex-col items-center justify-center gap-4">
                          <Icon name="Video" size={64} className="text-white" />
                          <p className="text-white text-xl font-medium">Загрузите видео для фона</p>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4">
                        <label htmlFor="video-upload">
                          <Button size="lg" className="gap-2 cursor-pointer" asChild>
                            <span>
                              <Icon name="Upload" size={20} />
                              Загрузить видео
                            </span>
                          </Button>
                        </label>
                        <input
                          id="video-upload"
                          type="file"
                          accept="video/*"
                          onChange={handleVideoUpload}
                          className="hidden"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentSection('welcome')}
                className="gap-2"
              >
                <Icon name="Home" size={20} />
                Вернуться на главную
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;