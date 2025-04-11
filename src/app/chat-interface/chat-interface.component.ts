import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
interface Message {
  text: string;
  sent: boolean; // true si envoyé par l'utilisateur, false si reçu
  timestamp: Date;
}

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.css'
})
export class ChatInterfaceComponent {
  messages: Message[] = [];
  newMessage = '';
  showChat = false;

  constructor() { }

  ngOnInit(): void {
    this.messages = [
      {
        text: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
        sent: false,
        timestamp: new Date()
      },
      {
        text: 'Un texte répond de façon plus ou moins pertinente à des critères qui en déterminent la qualité littéraire. On retient en particulier la structure d\'ensemble, la syntaxe et la ponctuation, l\'orthographe lexicale et grammaticale',
        sent: true,
        timestamp: new Date()
      },
      {
        text: 'Un texte répond de façon plus ou moins pertinente à des critères qui en déterminent la qualité littéraire. On retient en particulier la structure d\'ensemble, la syntaxe et la ponctuation, l\'orthographe lexicale et grammaticale',
        sent: false,
        timestamp: new Date()
      },
      {
        text: 'Un texte répond de façon plus ou moins pertinente à des critères qui en déterminent la qualité littéraire. On retient en particulier la structure d\'ensemble, la syntaxe et la ponctuation, l\'orthographe lexicale et grammaticale',
        sent: true,
        timestamp: new Date()
      }
    ];
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        sent: true,
        timestamp: new Date()
      });
      this.newMessage = '';

      // Simuler une réponse automatique
      setTimeout(() => {
        this.messages.push({
          text: 'Un texte répond de façon plus ou moins pertinente à des critères qui en déterminent la qualité littéraire.',
          sent: false,
          timestamp: new Date()
        });
      }, 1000);
    }
  }

  toggleChat(): void {
    this.showChat = !this.showChat;
  }
}
