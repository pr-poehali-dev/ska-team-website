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
    bio: 'Центральный нападающий с отличным чутьем'
  },
  { 
    number: 17, 
    name: 'max', 
    position: 'PW', 
    stats: '2780',
    games: 6,
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
      <header className="border-b border-border fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://avatars.mds.yandex.net/i?id=3976efaf5861705854b412324ef3dfc6a54b2768-5507593-images-thumbs&n=13" 
                alt="SKA Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold">SKA 1946</h1>
                <p className="text-xs text-muted-foreground">VFHL | PUCK LEAGUE</p>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">13th Place</Badge>
          </div>
        </div>
      </header>

      <nav className="fixed top-[65px] left-0 right-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className="flex items-center gap-2"
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
          <div className="mb-12 border border-border rounded-lg overflow-hidden bg-card">
            <div className="h-[300px] flex flex-col items-center justify-center text-center px-6 py-12">
              <img 
                src="https://avatars.mds.yandex.net/i?id=3976efaf5861705854b412324ef3dfc6a54b2768-5507593-images-thumbs&n=13" 
                alt="SKA Logo" 
                className="w-24 h-24 object-contain mb-6"
              />
              <h2 className="text-4xl font-bold mb-2">SKA 1946</h2>
              <p className="text-muted-foreground mb-8">VFHL | PUCK League Season 2025</p>
              <div className="flex gap-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">13</div>
                  <div className="text-sm text-muted-foreground">Position</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Players</div>
                </div>
              </div>
            </div>
          </div>

          {activeSection === 'team' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Roster</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamRoster.map((player) => (
                  <Card
                    key={player.number}
                    className="p-4 hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                        <img 
                          src="https://cdn.poehali.dev/files/8bb9cdc1-0225-436c-9095-69e5155d7dbc.png" 
                          alt={player.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {player.position}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {player.name}
                    </h3>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="default"
                        className="flex-1"
                        onClick={() => openDialog(player, 'stats')}
                      >
                        Stats
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => openDialog(player, 'profile')}
                      >
                        Profile
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
                        <tr key={idx} className={`border-b transition-colors ${idx >= 14 ? 'border-red-500 bg-red-500/10 hover:bg-red-500/20' : 'border-border/30 hover:bg-primary/5'}`}>
                          <td className="py-3 px-4 font-semibold text-center">{team.pos}</td>
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
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Icon name="Calendar" size={32} className="text-primary" />
                <span className="text-gradient">Календарь матчей</span>
              </h2>
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="grid grid-cols-7 gap-2">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                    <div key={day} className="text-center font-bold py-2 text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  
                  <div className="p-2 text-center">22</div>
                  <div className="p-2 text-center">23</div>
                  <div className="p-2 text-center">24</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">25</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">🏒 СКА</span>
                        <span className="font-bold">17:30</span>
                        <span className="text-[10px]">Белые медведи</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">26</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">🏒 СКА</span>
                        <span className="font-bold">17:30</span>
                        <span className="text-[10px]">Красная армия</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">27</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">🏒 СКА</span>
                        <span className="font-bold">17:30</span>
                        <span className="text-[10px]">Сибирские снайперы</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">28</div>

                  <div className="p-2 text-center">29</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">30</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">Омские ястребы</span>
                        <span className="font-bold">16:30</span>
                        <span className="text-[10px]">🏒 СКА</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">31</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">Толпар</span>
                        <span className="font-bold">16:30</span>
                        <span className="text-[10px]">🏒 СКА</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">1</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">Академия Михайлова</span>
                        <span className="font-bold">16:30</span>
                        <span className="text-[10px]">🏒 СКА</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">2</div>
                  <div className="p-2 text-center">3</div>
                  <div className="p-2 text-center">4</div>

                  <div className="p-2 text-center">5</div>
                  <div className="p-2 text-center">6</div>
                  <div className="p-2 text-center">7</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">8</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">🏒 СКА</span>
                        <span className="font-bold">18:30</span>
                        <span className="text-[10px]">Стальные лисы</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">9</div>
                  <div className="p-2 text-center">10</div>
                  <div className="p-2 text-center">11</div>

                  <div className="p-2 text-center">12</div>
                  <div className="p-2 text-center">13</div>
                  <div className="p-2 text-center">14</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">15</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">🏒 СКА</span>
                        <span className="font-bold">16:30</span>
                        <span className="text-[10px]">Локо</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">16</div>
                  <div className="p-2 text-center">17</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">18</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">Шинник</span>
                        <span className="font-bold">18:30</span>
                        <span className="text-[10px]">🏒 СКА</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 text-center">19</div>
                  <div className="p-2 text-center">20</div>
                  <div className="p-2 text-center">21</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">22</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">🏒 СКА</span>
                        <span className="font-bold">17:30</span>
                        <span className="text-[10px]">Кузнецкие медведи</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">23</div>
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="text-center font-semibold mb-2">24</div>
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px]">Алмаз</span>
                        <span className="font-bold">16:30</span>
                        <span className="text-[10px]">🏒 СКА</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">25</div>

                  <div className="p-2 text-center">26</div>
                  <div className="p-2 text-center">27</div>
                  <div className="p-2 text-center">28</div>
                  <div className="p-2 text-center">29</div>
                  <div className="p-2 text-center">30</div>
                  <div className="p-2 text-center">31</div>
                  <div className="p-2 text-center">1</div>
                  <div className="p-2 text-center">2</div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-4 h-4 bg-primary/10 border border-primary/30 rounded"></div>
                  <span>Матчи СКА 🏒</span>
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
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telegram</h3>
                      <a 
                        href="https://t.me/SKA1946VFHL" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors underline"
                      >
                        @SKA1946VFHL
                      </a>
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
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="text-3xl font-bold text-primary">{selectedPlayer.games}</div>
                    <div className="text-sm text-muted-foreground">Игр сыграно</div>
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
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Telegram</div>
                  <a 
                    href="https://t.me/SKA1946VFHL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline text-base font-medium"
                  >
                    https://t.me/SKA1946VFHL
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}