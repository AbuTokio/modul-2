import "./style.css"

type TWeeklyMeeting = {
  title: string
  startDate: Date
  weekday: string
}

// ? Nehmen wir an, es gibt keine Vorgaben für die Schreibweise des Wochentages
// ? An verschiedenen Stellen im Code kann hier verschiedenes stehen

const DailyMeet: TWeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekday: "Montag",
}

const TW_Meet: TWeeklyMeeting = {
  title: "TrainersWeekly",
  startDate: new Date(),
  weekday: "Dienstag",
}

const FeedBack_Meet: TWeeklyMeeting = { title: "Feedback", startDate: new Date(), weekday: "Friday" }

// # ENUM
// Enum ist eine vordefinierte Auflistung von Werten, hinter denen Number stecken

// ! Bei Syntaxfehler: In tsconfig.json => "erasableSyntaxOnly": false
enum Weekday {
  Monday, // 0
  Tuesday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
  Saturday, // 5
  Sunday, // 6
}

console.log(Weekday)

for (const weekday in Weekday) {
  console.log(weekday)
}

type TWeeklyMeeting2 = {
  title: string
  startDate: Date
  weekday: Weekday
}

const vorlesung: TWeeklyMeeting2 = {
  title: "Retro",
  startDate: new Date(),
  weekday: Weekday.Monday,
}

switch (vorlesung.weekday) {
  case Weekday.Monday:
    console.log("Heute ist Montag")
    break
  case Weekday.Tuesday:
    console.log("Am Dienstag ist die Vorlesung")
    break
  default:
    console.log("Ungültiger Tag")
}

// % BEISPIEL 2

enum OrderStatus {
  Created, // 0
  Accepted, // 1
  InProgress, // 2
  InDelivery, // 3
  Cancelled, // 4
  Deleted, // 5
}

// Das Enum "OrderStatus" können wir jetzt in unserem Type Bestellungen "TShopOrder" verwenden
// Alle die mit TShopOrder arbeiten, können jetzt nur sinnvolle Werte im Feld Status angeben

type TShopOrder = {
  number: number
  customerNumber: number
  status: OrderStatus
}

const order477: TShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.Created,
}

console.log(order477)

order477.status = OrderStatus.Accepted

console.log("Bezeichnung von OrderStatus direkt:", OrderStatus[1])
console.log("Bezeichnung von OrderStatus über Variable:", OrderStatus[order477.status])

// Wenn wir einem Enum keine eigenen Werte zuweisen, sind die Werte automatisch: 0, 1, 2, ...
// Wir können aber eigene Werte vergeben, indem wir sie mit = dahinter speichern

enum HttpStatusCode {
  OK = 200,
  Created = 201,
  BADGATEWAY = 400,
  NOTFOUND = 404,
}

console.log(HttpStatusCode)
