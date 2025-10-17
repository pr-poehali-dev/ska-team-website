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
    games: 1,
    wins: 28,
    saves: 1247,
    bio: 'Опытный вратарь с отличной реакцией'
  },
  { 
    number: 16, 
    name: 'KEWS1K', 
    position: 'PD', 
    stats: '2890',
    games: 4,
    goals: 15,
    assists: 32,
    bio: 'Защитник с мощным ударом'
  },
  { 
    number: 12, 
    name: 'extazy', 
    position: 'LD', 
    stats: '3120',
    games: 6,
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
    bio: 'Центральный нападающий с отличным видением площадки'
  },
  { 
    number: 17, 
    name: 'max', 
    position: 'PW', 
    stats: '3280',
    games: 6,
    goals: 28,
    assists: 24,
    bio: 'Правый нападающий с мощным броском'
  }
];

const standingsData = [
  { pos: 1, team: 'Красная Армия', i: 10, v: 8, vo: 0, po: 1, p: 1, sz: 23, sp: 9, o: 17 },
  { pos: 2, team: 'Тюменский Легион', i: 11, v: 6, vo: 1, po: 0, p: 3, sz: 24, sp: 11, o: 16 },
  { pos: 3, team: 'Сибирские снайперы', i: 12, v: 7, vo: 0, po: 0, p: 4, sz: 24, sp: 13, o: 15 },
  { pos: 4, team: 'Динамо-Шинник', i: 8, v: 5, vo: 1, po: 0, p: 1, sz: 21, sp: 10, o: 14 },
  { pos: 5, team: 'Толпар', i: 10, v: 5, vo: 0, po: 0, p: 3, sz: 26, sp: 14, o: 13 },
  { pos: 6, team: 'Стальные Лисы', i: 7, v: 6, vo: 0, po: 0, p: 1, sz: 14, sp: 6, o: 12 },
  { pos: 7, team: 'Омские ястребы', i: 9, v: 4, vo: 1, po: 0, p: 3, sz: 18, sp: 11, o: 11 },
  { pos: 8, team: 'Кузнецкие медведи', i: 8, v: 5, vo: 0, po: 0, p: 3, sz: 17, sp: 11, o: 10 },
  { pos: 9, team: 'Локо', i: 8, v: 5, vo: 0, po: 0, p: 3, sz: 15, sp: 11, o: 10 },
  { pos: 10, team: 'Академия Михайлова', i: 8, v: 4, vo: 1, po: 0, p: 3, sz: 17, sp: 13, o: 10 },
  { pos: 11, team: 'Белые медведи', i: 8, v: 4, vo: 0, po: 1, p: 2, sz: 14, sp: 11, o: 9 },
  { pos: 12, team: 'Шинник', i: 8, v: 4, vo: 0, po: 0, p: 4, sz: 17, sp: 15, o: 8 },
  { pos: 13, team: 'СКА 19-46', i: 7, v: 3, vo: 0, po: 0, p: 4, sz: 6, sp: 12, o: 6, highlight: true },
  { pos: 14, team: 'Ермак', i: 8, v: 2, vo: 1, po: 0, p: 5, sz: 9, sp: 16, o: 6 },
  { pos: 15, team: 'Тюменский легион-2', i: 7, v: 2, vo: 1, po: 0, p: 4, sz: 9, sp: 13, o: 6, relegation: true },
  { pos: 16, team: 'Реактор', i: 7, v: 2, vo: 0, po: 1, p: 3, sz: 10, sp: 15, o: 5, relegation: true },
  { pos: 17, team: 'Капитан Ступино', i: 8, v: 2, vo: 0, po: 0, p: 6, sz: 7, sp: 17, o: 4, relegation: true },
  { pos: 18, team: 'Алмаз', i: 7, v: 0, vo: 0, po: 0, p: 7, sz: 3, sp: 21, o: 0, relegation: true },
];

const scheduleMatches = [
  { date: 25, month: 10, team1: 'СКА', team2: 'Белые медведи', time: '17:30', isHome: true },
  { date: 26, month: 10, team1: 'СКА', team2: 'Красная армия', time: '17:30', isHome: true },
  { date: 27, month: 10, team1: 'СКА', team2: 'Сибирские снайперы', time: '17:30', isHome: true },
  { date: 30, month: 10, team1: 'Омские ястребы', team2: 'СКА', time: '16:30', isHome: false },
  { date: 31, month: 10, team1: 'Толпар', team2: 'СКА', time: '16:30', isHome: false },
  { date: 1, month: 11, team1: 'Академия Михайлова', team2: 'СКА', time: '16:30', isHome: false },
  { date: 8, month: 11, team1: 'СКА', team2: 'Стальные лисы', time: '18:30', isHome: true },
  { date: 15, month: 11, team1: 'СКА', team2: 'Локо', time: '16:30', isHome: true },
  { date: 18, month: 11, team1: 'Шинник', team2: 'СКА', time: '18:30', isHome: false },
  { date: 22, month: 11, team1: 'СКА', team2: 'Кузнецкие медведи', time: '17:30', isHome: true },
  { date: 24, month: 11, team1: 'Алмаз', team2: 'СКА', time: '16:30', isHome: false },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'team' | 'stats' | 'schedule' | 'news' | 'contacts'>('team');
  const [selectedPlayer, setSelectedPlayer] = useState<typeof teamRoster[0] | null>(null);
  const [dialogType, setDialogType] = useState<'stats' | 'profile'>('stats');

  const openDialog = (player: typeof teamRoster[0], type: 'stats' | 'profile') => {
    setSelectedPlayer(player);
    setDialogType(type);
  };

  const getCalendarDays = () => {
    const days = [];
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    
    for (let i = 1; i <= 30; i++) {
      const match = scheduleMatches.find(m => m.date === i && m.month === 10);
      days.push({ date: i, match });
    }
    
    return { daysOfWeek, days };
  };

  const calendar = getCalendarDays();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://avatars.mds.yandex.net/i?id=3976efaf5861705854b412324ef3dfc6a54b2768-5507593-images-thumbs&n=13" 
              alt="SKA Logo" 
              className="w-12 h-12 drop-shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gradient">SKA 1946</h1>
              <p className="text-xs text-muted-foreground">VFHL | PUCK LEAGUE</p>
            </div>
            <Badge variant="secondary" className="border border-border">13th Place</Badge>
          </div>
        </div>
      </header>

      <nav className="fixed top-[76px] left-0 right-0 z-40 backdrop-blur-md bg-background/95 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3">
            {[
              { id: 'team', label: 'Команда', icon: 'Users' },
              { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
              { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(item.id as any)}
                className={activeSection === item.id ? 'shadow-lg shadow-primary/30' : ''}
              >
                <Icon name={item.icon as any} size={16} />
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-[145px] pb-16">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="relative mb-12 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/20" style={{ height: '500px' }}>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-accent/30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M0 0h20v20H0z' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <div className="relative mb-6">
                <div className="absolute inset-0 blur-3xl bg-primary/20 animate-glow-pulse" />
                <img 
                  src="https://avatars.mds.yandex.net/i?id=3976efaf5861705854b412324ef3dfc6a54b2768-5507593-images-thumbs&n=13" 
                  alt="SKA Logo" 
                  className="relative w-32 h-32 drop-shadow-2xl"
                />
              </div>
              
              <h1 className="text-7xl font-bold mb-4 text-gradient" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.5)' }}>
                SKA 1946
              </h1>
              <p className="text-2xl font-medium text-foreground/90 mb-8">
                VFHL | PUCK League Season 2025
              </p>
              
              <div className="flex gap-8 mt-4">
                <Card className="px-8 py-6 bg-background/60 backdrop-blur-sm border-2 border-primary/40 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-primary mb-2">13</div>
                  <div className="text-sm text-muted-foreground">Position</div>
                </Card>
                <Card className="px-8 py-6 bg-background/60 backdrop-blur-sm border-2 border-accent/40 shadow-lg shadow-accent/20 hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-accent mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Players</div>
                </Card>
              </div>
            </div>
          </div>

          {activeSection === 'team' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Users" size={32} className="text-primary" />
                <span className="text-gradient">Roster</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamRoster.map((player) => (
                  <Card key={player.number} className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-primary/10 flex items-center justify-center">
                        <img 
                          src="https://tickets-hockey.ru/wp-content/uploads/ubs/team/872/ska-1946-mhl.svg" 
                          alt={player.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {player.position}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{player.name}</h3>
                    <div className="text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Игр:</span>
                        <span className="font-medium">{player.games}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => openDialog(player, 'stats')}
                      >
                        <Icon name="BarChart3" size={14} />
                        <span className="ml-1">Stats</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => openDialog(player, 'profile')}
                      >
                        <Icon name="User" size={14} />
                        <span className="ml-1">Profile</span>
                      </Button>
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
                        <th className="text-center py-3 px-4 font-semibold">Место</th>
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
                      {standingsData.map((row) => (
                        <tr 
                          key={row.pos}
                          className={`border-b transition-colors ${
                            row.relegation 
                              ? 'border-red-500/30 bg-red-500/10 hover:bg-red-500/20' 
                              : 'border-border/30 hover:bg-primary/5'
                          } ${row.highlight ? 'bg-primary/10 font-bold' : ''}`}
                        >
                          <td className="text-center py-3 px-4">{row.pos}</td>
                          <td className="text-left py-3 px-2">{row.team}</td>
                          <td className="text-center py-3 px-2">{row.i}</td>
                          <td className="text-center py-3 px-2">{row.v}</td>
                          <td className="text-center py-3 px-2">{row.vo}</td>
                          <td className="text-center py-3 px-2">{row.po}</td>
                          <td className="text-center py-3 px-2">{row.p}</td>
                          <td className="text-center py-3 px-2">{row.sz}</td>
                          <td className="text-center py-3 px-2">{row.sp}</td>
                          <td className="text-center py-3 px-2 font-bold bg-primary/10">{row.o}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                  <p className="mb-2"><strong>Легенда:</strong></p>
                  <p>И - Игры, В - Победы, ВО - Победы ОТ, ПО - Поражения ОТ, П - Поражения, ШЗ - Шайбы забитые, ШП - Шайбы пропущенные, О - Очки</p>
                  <p className="mt-2 text-red-400">Команды в зоне вылета выделены красным</p>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'schedule' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Calendar" size={32} className="text-primary" />
                <span className="text-gradient">Расписание</span>
              </h2>
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Октябрь 2025</h3>
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {calendar.daysOfWeek.map(day => (
                    <div key={day} className="text-center font-semibold text-sm text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {calendar.days.map(({ date, match }) => (
                    <div 
                      key={date} 
                      className={`min-h-[80px] p-2 rounded-lg border ${
                        match 
                          ? 'bg-primary/10 border-primary/30' 
                          : 'border-border/20'
                      }`}
                    >
                      <div className="text-sm font-semibold mb-1">{date}</div>
                      {match && (
                        <div className="text-[10px] leading-tight">
                          <div className="mb-0.5">{match.team1} vs {match.team2}</div>
                          <div className="font-bold">{match.time}</div>
                          {match.isHome && <div>🏒</div>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-4 h-4 bg-primary/20 border border-primary/50 rounded" />
                  <span>Матчи СКА</span>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'news' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Newspaper" size={32} className="text-primary" />
                <span className="text-gradient">Новости</span>
              </h2>
              <Card className="p-12 text-center">
                <Icon name="FileText" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl text-muted-foreground">Latest News & Updates Coming Soon</p>
              </Card>
            </div>
          )}

          {activeSection === 'contacts' && (
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="MessageCircle" size={32} className="text-primary" />
                <span className="text-gradient">Контакты</span>
              </h2>
              <Card className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.928-1.36 5.213-.168.546-.5.728-.818.746-.695.064-1.223-.459-1.895-.899-1.054-.688-1.649-1.115-2.671-1.786-.118-.077-.887-.564-.765-1.077.032-.135.582-.654 1.26-1.288.678-.634 1.36-1.268 1.36-1.268.101-.089.202-.267.014-.381-.188-.114-1.048-.682-1.886-1.229-.837-.547-1.675-1.094-1.675-1.094s-.218-.136-.609-.014c-.39.122-1.528.652-1.528.652s-.565.363-.034.752c0 0 2.505 2.324 3.765 3.484.084.078 2.022 1.857 2.492 2.286.087.08.174.238.174.375 0 .138-.044.275-.131.35-.521.45-3.956 3.457-3.956 3.457"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Telegram</div>
                    <a 
                      href="https://t.me/SKA1946VFHL" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold hover:text-primary transition-colors"
                    >
                      @SKA1946VFHL
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      <footer className="border-t border-border/50 bg-secondary/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          © 2025 SKA 1946 • VFHL | PUCK League
        </div>
      </footer>

      <Dialog open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedPlayer?.name}</DialogTitle>
            <DialogDescription>
              {dialogType === 'stats' ? 'Player Statistics' : 'Player Profile'}
            </DialogDescription>
          </DialogHeader>
          
          {dialogType === 'stats' && selectedPlayer && (
            <div className="space-y-4">
              <Card className="p-4 bg-primary/10">
                <div className="text-2xl font-bold text-center">{selectedPlayer.games}</div>
                <div className="text-sm text-center text-muted-foreground">Games Played</div>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                {selectedPlayer.position === 'GK' ? (
                  <>
                    <Card className="p-4 bg-secondary/50 rounded-lg">
                      <div className="text-xl font-bold text-center">{selectedPlayer.wins}</div>
                      <div className="text-sm text-center text-muted-foreground">Wins</div>
                    </Card>
                    <Card className="p-4 bg-secondary/50 rounded-lg">
                      <div className="text-xl font-bold text-center">{selectedPlayer.saves}</div>
                      <div className="text-sm text-center text-muted-foreground">Saves</div>
                    </Card>
                  </>
                ) : (
                  <>
                    <Card className="p-4 bg-secondary/50 rounded-lg">
                      <div className="text-xl font-bold text-center">{selectedPlayer.goals}</div>
                      <div className="text-sm text-center text-muted-foreground">Goals</div>
                    </Card>
                    <Card className="p-4 bg-secondary/50 rounded-lg">
                      <div className="text-xl font-bold text-center">{selectedPlayer.assists}</div>
                      <div className="text-sm text-center text-muted-foreground">Assists</div>
                    </Card>
                  </>
                )}
              </div>
            </div>
          )}
          
          {dialogType === 'profile' && selectedPlayer && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-2xl px-4 py-2">
                  #{selectedPlayer.number}
                </Badge>
                <Badge variant="secondary">
                  {selectedPlayer.position}
                </Badge>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Bio</h4>
                <p className="text-sm text-muted-foreground">{selectedPlayer.bio}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <a 
                  href="https://t.me/SKA1946VFHL" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Telegram: @SKA1946VFHL
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
