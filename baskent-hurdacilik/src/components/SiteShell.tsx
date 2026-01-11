import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatBotWidget } from './chatbot/ChatBotWidget';
import { StickyContactBar } from './StickyContactBar';

type Props = { children: React.ReactNode };

export function SiteShell({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBotWidget />
      <StickyContactBar />
    </div>
  );
}
