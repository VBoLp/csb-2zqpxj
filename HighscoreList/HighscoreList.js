/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HighscoreList extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./HighscoreList/costumes/Kostüm1.svg", {
        x: 177.69058,
        y: 93.65558265624999
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./HighscoreList/sounds/Plopp.wav"),
      new Sound("Clapping", "./HighscoreList/sounds/Clapping.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Score" },
        this.whenIReceiveNewScore
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      )
    ];
  }

  *whenIReceiveNewScore() {
    this.stage.vars.deinePunktzahl = this.stage.vars.punkte;
    yield* this.askAndWait("Wie lautet dein Name?");
    this.stage.vars.men = "Lade";
    this.stopAllSounds();
    this.broadcast("Musik In");
    this.broadcast("Highscore Menü");
    this.broadcast("Übergang");
    this.broadcast("Musik");
    this.stage.watchers.deinePunktzahl.visible = true;
    this.stage.vars.nameSave = this.answer;
    this.stage.vars.men = "Highscore";
    if (this.compare(this.answer, this.stage.vars.name1) === 0) {
      if (
        this.compare(
          this.stage.vars.deinePunktzahl,
          this.stage.vars.highscore
        ) > 0
      ) {
        this.stage.vars.highscore = this.stage.vars.deinePunktzahl;
        yield* this.playSoundUntilDone("Clapping");
        return;
      }
    } else {
      if (this.compare(this.answer, this.stage.vars.name2) === 0) {
        if (
          this.compare(this.stage.vars.deinePunktzahl, this.stage.vars.platz2) >
          0
        ) {
          this.stage.vars.platz2 = this.stage.vars.deinePunktzahl;
          if (
            this.compare(
              this.stage.vars.deinePunktzahl,
              this.stage.vars.highscore
            ) > 0
          ) {
            this.stage.vars.nameSave = this.stage.vars.name1;
            this.stage.vars.name1 = this.stage.vars.name2;
            this.stage.vars.name2 = this.stage.vars.nameSave;
            this.stage.vars.platz2 = this.stage.vars.highscore;
            this.stage.vars.highscore = this.stage.vars.punkte;
          }
          yield* this.playSoundUntilDone("Clapping");
          return;
        }
      } else {
        if (this.compare(this.answer, this.stage.vars.name3) === 0) {
          if (
            this.compare(
              this.stage.vars.deinePunktzahl,
              this.stage.vars.platz3
            ) > 0
          ) {
            this.stage.vars.platz3 = this.stage.vars.deinePunktzahl;
            if (
              this.compare(
                this.stage.vars.deinePunktzahl,
                this.stage.vars.highscore
              ) > 0
            ) {
              this.stage.vars.nameSave = this.stage.vars.name1;
              this.stage.vars.name1 = this.stage.vars.name3;
              this.stage.vars.name3 = this.stage.vars.name2;
              this.stage.vars.name2 = this.stage.vars.nameSave;
              this.stage.vars.platz3 = this.stage.vars.platz2;
              this.stage.vars.platz2 = this.stage.vars.highscore;
              this.stage.vars.highscore = this.stage.vars.punkte;
            } else {
              if (
                this.compare(
                  this.stage.vars.deinePunktzahl,
                  this.stage.vars.platz2
                ) > 0
              ) {
                this.stage.vars.nameSave = this.stage.vars.name2;
                this.stage.vars.name2 = this.stage.vars.name3;
                this.stage.vars.name3 = this.stage.vars.nameSave;
                this.stage.vars.platz3 = this.stage.vars.platz2;
                this.stage.vars.platz2 = this.stage.vars.punkte;
              }
            }
            yield* this.playSoundUntilDone("Clapping");
            return;
          }
        } else {
          if (
            this.compare(this.stage.vars.punkte, this.stage.vars.highscore) > 0
          ) {
            yield* this.playSoundUntilDone("Clapping");
            this.stage.vars.platz3 = this.stage.vars.platz2;
            this.stage.vars.platz2 = this.stage.vars.highscore;
            this.stage.vars.highscore = this.stage.vars.punkte;
            this.stage.vars.name3 = this.stage.vars.name2;
            this.stage.vars.name2 = this.stage.vars.name1;
            this.stage.vars.name1 = this.stage.vars.nameSave;
          } else {
            if (
              this.compare(
                this.stage.vars.punkte,
                this.stage.vars.highscore
              ) === 0
            ) {
              yield* this.playSoundUntilDone("Clapping");
              this.stage.vars.platz3 = this.stage.vars.platz2;
              this.stage.vars.platz2 = this.stage.vars.punkte;
              this.stage.vars.name3 = this.stage.vars.name2;
              this.stage.vars.name2 = this.stage.vars.nameSave;
            } else {
              if (
                this.compare(this.stage.vars.punkte, this.stage.vars.platz2) > 0
              ) {
                yield* this.playSoundUntilDone("Clapping");
                this.stage.vars.platz3 = this.stage.vars.platz2;
                this.stage.vars.platz2 = this.stage.vars.punkte;
                this.stage.vars.name3 = this.stage.vars.name2;
                this.stage.vars.name2 = this.stage.vars.nameSave;
              } else {
                if (
                  this.compare(
                    this.stage.vars.punkte,
                    this.stage.vars.platz2
                  ) === 0
                ) {
                  yield* this.playSoundUntilDone("Clapping");
                  this.stage.vars.platz3 = this.stage.vars.punkte;
                  this.stage.vars.name3 = this.stage.vars.nameSave;
                } else {
                  if (
                    this.compare(
                      this.stage.vars.punkte,
                      this.stage.vars.platz3
                    ) > 0
                  ) {
                    yield* this.playSoundUntilDone("Clapping");
                    this.stage.vars.platz3 = this.stage.vars.punkte;
                    this.stage.vars.name3 = this.stage.vars.nameSave;
                  } else {
                    if (
                      this.compare(
                        this.stage.vars.punkte,
                        this.stage.vars.platz3
                      ) === 0
                    ) {
                      yield* this.playSoundUntilDone("Clapping");
                      this.stage.vars.platz3 = this.stage.vars.punkte;
                      this.stage.vars.name3 = this.stage.vars.nameSave;
                    } else {
                      null;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveHighscoreMen() {
    yield* this.wait(0.24);
    this.stage.vars.men = "Highscore";
    this.stage.watchers.highscore.visible = true;
    this.stage.watchers.platz2.visible = true;
    this.stage.watchers.platz3.visible = true;
    this.stage.watchers.name1.visible = true;
    this.stage.watchers.name2.visible = true;
    this.stage.watchers.name3.visible = true;
  }

  *whenIReceiveSpielStart() {
    while (true) {
      if (
        this.toString(this.stage.vars.men) === "Highscore" ||
        this.toString(this.stage.vars.men) === "Highscore Lade"
      ) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
