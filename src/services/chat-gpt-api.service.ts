import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatGptApiService {
  private apiKey = '';
  private sessionId = null;

  constructor() { }

  getResponse = async(prompt: string) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are a expertise Pokemon Trainer, you know the effectiveness types table and everything about Pokemon."},
        {role: "user", content: prompt}
      ],
      temperature: 0.5,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: this.sessionId ? this.sessionId : undefined
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });
    const jsonResponse = await response.json();
    this.sessionId = jsonResponse.choices[0].session;
    return jsonResponse;
  }

  resetSession = () => {
    this.sessionId = null;
  }
}
