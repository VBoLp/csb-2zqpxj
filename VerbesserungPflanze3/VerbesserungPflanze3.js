/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VerbesserungPflanze3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Upgrade 1",
        "./VerbesserungPflanze3/costumes/Upgrade 1.svg",
        { x: 167.72222222222229, y: 50.32020080194184 }
      ),
      new Costume(
        "Upgrade 2",
        "./VerbesserungPflanze3/costumes/Upgrade 2.svg",
        { x: 167.72222, y: 50.32020080194184 }
      ),
      new Costume(
        "Upgrade 3",
        "./VerbesserungPflanze3/costumes/Upgrade 3.svg",
        { x: 167.72222, y: 50.32020080194184 }
      )
    ];

    this.sounds = [
      new Sound("Plopp", "./VerbesserungPflanze3/sounds/Plopp.wav"),
      new Sound("Klick", "./VerbesserungPflanze3/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 1" },
        this.whenIReceive3Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 2" },
        this.whenIReceive3Upgrade2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pflanze 3" },
        this.whenIReceivePflanze3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceive3Upgrade1() {
    while (true) {
      if (this.compare(this.stage.vars.euro, 79.9) > 0) {
        this.effects.color = 160;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 80;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 100;
          this.effects.brightness = 0;
          this.costume = "Upgrade 3";
          yield* this.wait(0.1);
          this.stage.vars.wartezeitPflanze3 = 0.5;
          this.stage.vars.autoaimDauer2 = 0.45;
          this.broadcast("3 Upgrade 2");
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 0;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceive3Upgrade2() {
    while (true) {
      this.effects.color = 160;
      if (this.compare(this.stage.vars.euro, 119.9) > 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 120;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 100;
          this.stage.vars.wartezeitPflanze3 = 0.35;
          this.stage.vars.autoaimDauer2 = 0.3;
          this.stage.vars.alleUpgrades++;
          this.broadcast("3 Upgrade 0");
          this.visible = false;
          /* TODO: Implement stop other scripts in sprite */ null;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceivePflanze3() {
    this.visible = true;
    this.stage.vars.wartezeitPflanze3 = 1.05;
    this.effects.brightness = 0;
    this.effects.ghost = 0;
    this.costume = "Upgrade 1";
    while (true) {
      if (this.compare(this.stage.vars.euro, 39.9) > 0) {
        this.effects.color = 160;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 40;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 100;
          yield* this.wait(0.1);
          this.effects.brightness = 0;
          this.stage.vars.wartezeitPflanze3 = 0.7;
          this.stage.vars.autoaimDauer2 = 0.6;
          this.broadcast("3 Upgrade 1");
          this.costume = "Upgrade 2";
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 0;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
