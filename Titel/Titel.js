/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Titel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Titel/costumes/Kostüm1.svg", {
        x: 187.5301582903405,
        y: 182.28894187499998
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Titel/sounds/Plopp.wav"),
      new Sound("Menü Theme", "./Titel/sounds/Menü Theme.wav"),
      new Sound("rrrr", "./Titel/sounds/rrrr.wav"),
      new Sound("Klatsch2", "./Titel/sounds/Klatsch2.wav"),
      new Sound("fly", "./Titel/sounds/fly.wav"),
      new Sound("Klick", "./Titel/sounds/Klick.wav"),
      new Sound("chrah", "./Titel/sounds/chrah.wav"),
      new Sound("Klick2", "./Titel/sounds/Klick2.wav"),
      new Sound("Klick3", "./Titel/sounds/Klick3.wav"),
      new Sound("Pew", "./Titel/sounds/Pew.wav"),
      new Sound("Pew2", "./Titel/sounds/Pew2.wav"),
      new Sound("Klick4", "./Titel/sounds/Klick4.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Musik" }, this.whenIReceiveMusik),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Musik" },
        this.whenIReceiveMusik2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Leiser" },
        this.whenIReceiveLeiser
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lauter" },
        this.whenIReceiveLauter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Musik" },
        this.whenIReceiveMusik3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Musik In" },
        this.whenIReceiveMusikIn
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start!" }, this.whenIReceiveStart)
    ];

    this.audioEffects.volume = 50;
  }

  *whenIReceiveMusik() {
    this.moveBehind();
    while (true) {
      if (this.toString(this.stage.vars.men) === "Menü") {
        this.visible = true;
      } else {
        if (this.toString(this.stage.vars.men) === "Beenden?") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      if (this.toString(this.stage.vars.men) === "Im Spiel!") {
        this.visible = false;
        yield* this.wait(0.24);
        this.stage.watchers.euro.visible = true;
        this.stage.watchers.punkte.visible = true;
      } else {
        this.stage.watchers.euro.visible = false;
        this.stage.watchers.punkte.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveSpielStart() {
    this.stage.watchers.euro.visible = false;
    this.stage.watchers.punkte.visible = false;
    this.stage.vars.musikart = "Normal";
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.euro.visible = false;
    this.stage.watchers.punkte.visible = false;
  }

  *whenIReceiveMusik2() {
    while (true) {
      if (
        !(this.toString(this.stage.vars.men) === "Im Spiel!") &&
        !(this.toString(this.stage.vars.men) === "Menü") &&
        this.toString(this.stage.vars.musik) === "An"
      ) {
        yield* this.playSoundUntilDone("Alf42red-Mauiwowi");
      } else {
        if (
          !(this.toString(this.stage.vars.men) === "Im Spiel!") &&
          this.toString(this.stage.vars.musik) === "An"
        ) {
          yield* this.playSoundUntilDone("Momo64-esp");
        } else {
          if (
            this.toString(this.stage.vars.men) === "Im Spiel!" &&
            this.toString(this.stage.vars.musik) === "An"
          ) {
            if (this.toString(this.stage.vars.musikart) === "Splat") {
              yield* this.playSoundUntilDone(
                "Fly Octo Fly _ Ebb  Flow  HD Music Video (English Lyrics) - Splatoon 2 Octo Expansion"
              );
            } else {
              yield* this.playSoundUntilDone("Impulslogik-Zen");
            }
          } else {
            null;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveLeiser() {
    this.audioEffects.volume -= 5;
    yield* this.startSound("Klick2");
  }

  *whenIReceiveLauter() {
    this.audioEffects.volume += 5;
    yield* this.startSound("Klick2");
  }

  *whenIReceiveMusik3() {
    while (true) {
      this.stage.vars.lautstRke = this.audioEffects.volume;
      yield;
    }
  }

  *whenIReceiveMusikIn() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(0.1);
    this.broadcast("Musik");
    return;
  }

  *whenIReceiveStart() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(0.1);
    this.broadcast("Musik");
    return;
  }
}
