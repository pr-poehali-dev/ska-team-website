import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const teamRoster = [
  { 
    number: 43, 
    name: 'BAGA', 
    position: 'GK', 
    stats: '3775',
    games: 42,
    wins: 28,
    saves: 1247,
    bio: 'Опытный вратарь с отличной реакцией'
  },
  { 
    number: 16, 
    name: 'KEWS1K', 
    position: 'PD', 
    stats: '2890',
    games: 40,
    goals: 15,
    assists: 32,
    bio: 'Защитник с мощным ударом'
  },
  { 
    number: 12, 
    name: 'extazy', 
    position: 'LD', 
    stats: '3120',
    games: 41,
    goals: 12,
    assists: 28,
    bio: 'Надежный защитник левого фланга'
  },
  { 
    number: 7, 
    name: 'F', 
    position: 'CW', 
    stats: '2450',
    games: 38,
    goals: 35,
    assists: 18,
    bio: 'Центральный нападающий с отличным чутьем'
  },
  { 
    number: 17, 
    name: 'max', 
    position: 'PW', 
    stats: '2780',
    games: 39,
    goals: 28,
    assists: 24,
    bio: 'Быстрый форвард правого фланга'
  },
];

const sections = [
  { id: 'team', label: 'Команда', icon: 'Users' },
  { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
  { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
  { id: 'news', label: 'Новости', icon: 'Newspaper' },
  { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('team');
  const [selectedPlayer, setSelectedPlayer] = useState<typeof teamRoster[0] | null>(null);
  const [dialogType, setDialogType] = useState<'stats' | 'profile' | null>(null);

  const openDialog = (player: typeof teamRoster[0], type: 'stats' | 'profile') => {
    setSelectedPlayer(player);
    setDialogType(type);
  };

  const closeDialog = () => {
    setSelectedPlayer(null);
    setDialogType(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://avatars.mds.yandex.net/i?id=3976efaf5861705854b412324ef3dfc6a54b2768-5507593-images-thumbs&n=13" 
                  alt="SKA Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gradient">SKA 1946</h1>
                  <p className="text-xs text-muted-foreground">VFHL | PUCK LEAGUE</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-secondary/80 border border-primary/20">
              <Icon name="Trophy" size={16} className="mr-2" />
              9th Place
            </Badge>
          </div>
        </div>
      </header>

      <nav className="fixed top-[73px] left-0 right-0 z-40 bg-secondary/50 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 transition-all ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={section.icon as any} size={16} />
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-[145px] pb-12">
        <div className="container mx-auto px-4">
          <div className="relative mb-12 rounded-2xl overflow-hidden h-[500px] bg-gradient-to-br from-primary/30 via-secondary to-accent/30 border-2 border-primary/40 animate-fade-in shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIEwgMjAgMjAgTCAwIDIwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://avatars.mds.yandex.net/i?id=3976efaf5861705854b412324ef3dfc6a54b2768-5507593-images-thumbs&n=13" 
                  alt="SKA Logo" 
                  className="relative w-32 h-32 object-contain animate-glow-pulse drop-shadow-2xl rounded-3xl"
                />
              </div>
              <h2 className="text-7xl font-bold mb-4 glow bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">SKA 1946</h2>
              <p className="text-2xl text-foreground/90 mb-8 font-medium">VFHL | PUCK League Season 2025</p>
              <div className="flex gap-8 text-center">
                <div className="bg-background/60 backdrop-blur-md px-8 py-4 rounded-xl border-2 border-primary/40 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-primary mb-1">9</div>
                  <div className="text-sm text-muted-foreground font-medium">Position</div>
                </div>
                <div className="bg-background/60 backdrop-blur-md px-8 py-4 rounded-xl border-2 border-accent/40 shadow-lg shadow-accent/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-accent mb-1">5</div>
                  <div className="text-sm text-muted-foreground font-medium">Players</div>
                </div>
              </div>
            </div>
          </div>

          {activeSection === 'team' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Users" size={32} className="text-primary" />
                <span className="text-gradient">Roster</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamRoster.map((player, index) => (
                  <Card
                    key={player.number}
                    className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full transition-all group-hover:scale-150 group-hover:opacity-20"></div>
                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold border-4 border-background shadow-lg group-hover:scale-110 transition-transform">
                          {player.number}
                        </div>
                        <Badge variant="outline" className="text-xs border-primary/30 bg-primary/10">
                          {player.position}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                        {player.name}
                      </h3>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="default"
                          className="flex-1 bg-primary hover:bg-primary/90 text-white"
                          onClick={() => openDialog(player, 'stats')}
                        >
                          <Icon name="BarChart2" size={14} className="mr-1" />
                          Stats
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 border-accent text-accent hover:bg-accent hover:text-white"
                          onClick={() => openDialog(player, 'profile')}
                        >
                          <Icon name="User" size={14} className="mr-1" />
                          Profile
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'stats' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="BarChart3" size={32} className="text-primary" />
                <span className="text-gradient">Статистика</span>
              </h2>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Trophy" size={24} className="text-primary" />
                  Турнирная таблица VFHL
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-3 px-2 font-semibold">Место</th>
                        <th className="text-left py-3 px-2 font-semibold">Команда</th>
                        <th className="text-center py-3 px-2 font-semibold">И</th>
                        <th className="text-center py-3 px-2 font-semibold">В</th>
                        <th className="text-center py-3 px-2 font-semibold">ВО</th>
                        <th className="text-center py-3 px-2 font-semibold">ПО</th>
                        <th className="text-center py-3 px-2 font-semibold">П</th>
                        <th className="text-center py-3 px-2 font-semibold">ШЗ</th>
                        <th className="text-center py-3 px-2 font-semibold">ШП</th>
                        <th className="text-center py-3 px-2 font-semibold bg-primary/20">О</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { pos: 1, team: 'Красная Армия', i: 10, v: 8, vo: 0, po: 1, p: 1, sz: 23, sp: 9, o: 17 },
                        { pos: 2, team: 'Тюменский Легион', i: 11, v: 6, vo: 1, po: 0, p: 3, sz: 24, sp: 11, o: 16 },
                        { pos: 3, team: 'Сибирские снайперы', i: 12, v: 7, vo: 0, po: 0, p: 4, sz: 24, sp: 13, o: 15 },
                        { pos: 4, team: 'Динамо-Шинник', i: 8, v: 5, vo: 1, po: 0, p: 1, sz: 21, sp: 10, o: 14 },
                        { pos: 5, team: 'Толпар', i: 10, v: 5, vo: 0, po: 0, p: 3, sz: 26, sp: 14, o: 13 },
                        { pos: 6, team: 'Стальные Лисы', i: 7, v: 6, vo: 0, po: 0, p: 1, sz: 14, sp: 6, o: 12 },
                        { pos: 7, team: 'МХК Спартак', i: 5, v: 4, vo: 0, po: 0, p: 1, sz: 12, sp: 3, o: 8 },
                        { pos: 8, team: 'Мамонты Югры', i: 5, v: 3, vo: 1, po: 0, p: 1, sz: 10, sp: 6, o: 8 },
                        { pos: 9, team: 'Академия Михайлова', i: 7, v: 3, vo: 1, po: 0, p: 3, sz: 9, sp: 8, o: 8 },
                        { pos: 10, team: 'Локо', i: 8, v: 3, vo: 0, po: 1, p: 4, sz: 19, sp: 24, o: 7 },
                        { pos: 11, team: 'Омские Ястребы', i: 10, v: 3, vo: 0, po: 0, p: 7, sz: 13, sp: 18, o: 6 },
                        { pos: 12, team: 'МХК Динамо СПб', i: 8, v: 1, vo: 0, po: 1, p: 4, sz: 10, sp: 17, o: 6 },
                        { pos: 13, team: 'СКА 19-46', i: 7, v: 3, vo: 0, po: 0, p: 4, sz: 6, sp: 12, o: 6 },
                        { pos: 14, team: 'Кузнецкие Медведи', i: 9, v: 2, vo: 0, po: 0, p: 7, sz: 7, sp: 20, o: 4 },
                        { pos: 15, team: 'Чайка', i: 4, v: 1, vo: 0, po: 1, p: 2, sz: 5, sp: 9, o: 3 },
                        { pos: 16, team: 'Белые Медведи', i: 8, v: 1, vo: 0, po: 0, p: 6, sz: 4, sp: 20, o: 3 },
                        { pos: 17, team: 'Крылья Советов', i: 2, v: 1, vo: 0, po: 0, p: 1, sz: 2, sp: 2, o: 2 },
                        { pos: 18, team: 'Алмаз', i: 9, v: 0, vo: 0, po: 0, p: 9, sz: 3, sp: 29, o: 0 },
                      ].map((team, idx) => (
                        <tr key={idx} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                          <td className="py-3 px-2 font-semibold text-center">{team.pos}</td>
                          <td className="py-3 px-2 font-medium">{team.team}</td>
                          <td className="text-center py-3 px-2">{team.i}</td>
                          <td className="text-center py-3 px-2">{team.v}</td>
                          <td className="text-center py-3 px-2">{team.vo}</td>
                          <td className="text-center py-3 px-2">{team.po}</td>
                          <td className="text-center py-3 px-2">{team.p}</td>
                          <td className="text-center py-3 px-2">{team.sz}</td>
                          <td className="text-center py-3 px-2">{team.sp}</td>
                          <td className="text-center py-3 px-2 font-bold bg-primary/10">{team.o}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  <p>И - Игры | В - Победы | ВО - Победы ОТ | ПО - Поражения ОТ | П - Поражения | ШЗ - Шайбы забитые | ШП - Шайбы пропущенные | О - Очки</p>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'schedule' && (
            <div className="animate-slide-up space-y-6">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Calendar" size={32} className="text-primary" />
                <span className="text-gradient">Календарь матчей</span>
              </h2>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden p-4">
                <img 
                  src="https://cdn.poehali.dev/files/15588aca-c589-4445-9359-c2290dff97ab.png" 
                  alt="Match Schedule Calendar" 
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                <div className="w-full h-[800px]">
                  <iframe 
                    src="https://vfhl.pythonanywhere.com/matchcalendar" 
                    className="w-full h-full border-0"
                    title="VFHL Match Calendar"
                  />
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'news' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Newspaper" size={32} className="text-primary" />
                <span className="text-gradient">News</span>
              </h2>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="text-center py-12">
                  <Icon name="FileText" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">Latest News & Updates Coming Soon</p>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'contacts' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="MessageCircle" size={32} className="text-primary" />
                <span className="text-gradient">Contacts</span>
              </h2>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">ska1946@vfhl.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name="MessageSquare" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Discord</h3>
                      <p className="text-muted-foreground">SKA_1946#team</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border/50 mt-12 py-8 bg-secondary/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 SKA 1946 • VFHL | PUCK League</p>
        </div>
      </footer>

      <Dialog open={!!selectedPlayer} onOpenChange={closeDialog}>
        <DialogContent className="max-w-md bg-card border-border">
          {selectedPlayer && dialogType === 'stats' && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold">
                    {selectedPlayer.number}
                  </div>
                  <span>{selectedPlayer.name}</span>
                </DialogTitle>
                <DialogDescription>
                  Статистика игрока за сезон 2025
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-3xl font-bold text-primary">{selectedPlayer.games}</div>
                    <div className="text-sm text-muted-foreground">Игр сыграно</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="text-3xl font-bold text-accent">{selectedPlayer.stats}</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </div>
                {selectedPlayer.position === 'GK' ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="text-muted-foreground">Побед</span>
                      <span className="text-xl font-bold">{selectedPlayer.wins}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="text-muted-foreground">Сейвов</span>
                      <span className="text-xl font-bold">{selectedPlayer.saves}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="text-muted-foreground">Голов</span>
                      <span className="text-xl font-bold">{selectedPlayer.goals}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="text-muted-foreground">Передач</span>
                      <span className="text-xl font-bold">{selectedPlayer.assists}</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {selectedPlayer && dialogType === 'profile' && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold">
                    {selectedPlayer.number}
                  </div>
                  <span>{selectedPlayer.name}</span>
                </DialogTitle>
                <DialogDescription>
                  Профиль игрока команды SKA 1946
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <span className="text-muted-foreground">Номер</span>
                  <Badge variant="outline" className="text-lg px-4 py-1 border-primary/30 bg-primary/10">
                    #{selectedPlayer.number}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <span className="text-muted-foreground">Позиция</span>
                  <Badge variant="outline" className="text-lg px-4 py-1 border-accent/30 bg-accent/10">
                    {selectedPlayer.position}
                  </Badge>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">О игроке</div>
                  <p className="text-base">{selectedPlayer.bio}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}