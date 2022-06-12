# nlw together
## Projeto: letmeask
colocar perguntas no mesmo local e fazer os kra votar nas perguntas pra eles responder


#### Fazer Deploy da aplicação

`npm install -g firebase-tools`
`firebase login`
`firebase init`
`yarn build`
`firebase deploy`
#### Regras de autorização do firebase
```json
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",  
          }
        }
      }
    }
  }
}
```