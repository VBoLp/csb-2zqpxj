/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VerbesserungPflanze1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Upgrade 1",
        "./VerbesserungPflanze1/costumes/Upgrade 1.svg",
        { x: 167.72222222222229, y: 50.32020517694181 }
      ),
      new Costume(
        "Upgrade 2",
        "./VerbesserungPflanze1/costumes/Upgrade 2.svg",
        { x: 167.72222222222229, y: 50.32020517694181 }
      ),
      new Costume(
        "Upgrade 3",
        "./VerbesserungPflanze1/costumes/Upgrade 3.svg",
        { x: 167.72222222222229, y: 50.32020517694181 }
      )
    ];

    this.sounds = [
      new Sound("Plopp", "./VerbesserungPflanze1/sounds/Plopp.wav"),
      new Sound("Klick", "./VerbesserungPflanze1/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1 Upgrade 1" },
        this.whenIReceive1Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1 Upgrade 2" },
        this.whenIReceive1Upgrade2
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
    this.stage.vars.alleUpgrades = 0;
    this.visible = true;
    this.stage.vars.wartezeitPflanze1 = 1;
    this.effects.brightness = 0;
    this.effects.ghost = 0;
    this.costume = "Upgrade 1";
    while (true) {
      if (this.compare(this.stage.vars.euro, 9.9) > 0) {
        this.effects.color = 60;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 10;
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
          this.stage.vars.wartezeitPflanze1 = 1.2;
          this.broadcast("1 Upgrade 1");
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

  *whenIReceive1Upgrade1() {
    while (true) {
      if (this.compare(this.stage.vars.euro, 39.9) > 0) {
        this.effects.color = 60;
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
          this.effects.brightness = 0;
          this.costume = "Upgrade 3";
          yield* this.wait(0.1);
          this.stage.vars.wartezeitPflanze1 = 1;
          this.broadcast("1 Upgrade 2");
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

  *whenIReceive1Upgrade2() {
    while (true) {
      if (this.compare(this.stage.vars.euro, 69.9) > 0) {
        this.effects.color = 60;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 70;
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
          this.stage.vars.wartezeitPflanze1 = 0.6;
          this.broadcast("1 Upgrade 0");
          this.visible = false;
          /* TODO: Implement stop other scripts in sprite */ null;
          this.stage.vars.alleUpgrades++;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceiveMen() {
    this.stage.vars.alleUpgrades = 0;
    this.visible = false;
  }

  *whenIReceiveHighscoreMen() {
    this.stage.vars.alleUpgrades = 0;
    this.visible = false;
  }

  *whenIReceiveHardcore() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.alleUpgrades = 0;
    this.visible = true;
    this.stage.vars.wartezeitPflanze1 = 1;
    this.effects.brightness = 0;
    this.effects.ghost = 0;
    this.costume = "Upgrade 1";
    while (true) {
      if (this.compare(this.stage.vars.euro, 9.9) > 0) {
        this.effects.color = 60;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 10;
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
          this.stage.vars.wartezeitPflanze1 = 1.2;
          this.broadcast("1 Upgrade 1");
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
}
