/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Einblendung extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Einblendung/costumes/Kostüm1.svg", {
        x: 279.27467811158783,
        y: 209.81249999999991
      })
    ];

    this.sounds = [new Sound("Plopp", "./Einblendung/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Übergang" },
        this.whenIReceiveBergang
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel beenden!" },
        this.whenIReceiveSpielBeenden
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Beenden?" },
        this.whenIReceiveSpielBeenden2
      )
    ];
  }

  *whenIReceiveBergang() {
    this.effects.ghost = 100;
    this.visible = true;
    this.moveAhead();
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 0;
    yield* this.wait(0.06);
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.effects.ghost = 100;
    this.visible = false;
  }

  *whenIReceiveSpielBeenden() {
    this.effects.ghost = 100;
    this.visible = true;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 0;
    yield* this.wait(0.06);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveSpielStart() {
    yield* this.wait(3.95);
    this.broadcast("Menü");
    this.broadcast("Neustart");
    this.broadcast("Musik");
  }

  *whenIReceiveSpielStart2() {
    this.stage.watchers.highscore.visible = false;
    this.stage.watchers.platz2.visible = false;
    this.stage.watchers.platz3.visible = false;
    this.stage.watchers.name1.visible = false;
    this.stage.watchers.name2.visible = false;
    this.stage.watchers.name3.visible = false;
    this.stage.watchers.zurCkZumHauptmen.visible = false;
    this.moveAhead();
    this.visible = true;
    yield* this.wait(4);
    this.effects.ghost = 0;
    yield* this.wait(0.06);
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.effects.ghost = 100;
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.highscore.visible = false;
    this.stage.watchers.platz2.visible = false;
    this.stage.watchers.platz3.visible = false;
    this.stage.watchers.name1.visible = false;
    this.stage.watchers.name2.visible = false;
    this.stage.watchers.name3.visible = false;
    this.stage.watchers.zurCkZumHauptmen.visible = false;
    this.visible = true;
    this.effects.ghost = 0;
  }

  *whenIReceiveSpielBeenden2() {
    yield* this.askAndWait("Möchtest du das Spiel wirklich verlassen?");
    if (
      this.answer === "Klar" ||
      this.answer === "Klar!" ||
      this.answer === "Klar." ||
        this.answer === "Ja" ||
          this.answer === "Yes" ||
          this.answer === "Ja!" || this.answer === "Yes!" ||
          this.answer === "Ja." || this.answer === "Yes." ||
          this.answer === "Jup" || this.answer === "Jup!" ||
          this.answer === "Jup." || this.answer === "Yea" ||
          this.answer === "Yea!" || this.answer === "Yea."
    ) {
      this.broadcast("Beenden Ja");
      while (true) {
        if (this.toString(this.stage.vars.ausschalten) === "Bereit") {
          yield* this.wait(0.1);
        }
        yield;
      }
    } else {
      if (
        this.answer === "Hilfe" ||
        this.answer === "Hilfe!" ||
        this.answer === "Help" || this.answer === "Help!"
      ) {
        this.broadcast("Notruf");
      } else {
        if (
          this.toNumber(this.answer) === 69 ||
          this.answer === "Nice" ||
          this.answer === "Nice!"
        ) {
          this.broadcast("Nice 69");
        } else {
          if (
            this.answer === "Streber" ||
            this.answer === "Streber!" ||
            this.answer === "Schlaumeier" ||
            this.answer === "Schlaumeier!"
          ) {
            this.broadcast("Streber!");
          } else {
            this.broadcast("Beenden Nein");
          }
        }
      }
    }
  }
}
