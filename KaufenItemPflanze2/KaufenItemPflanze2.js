/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KaufenItemPflanze2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Nope", "./KaufenItemPflanze2/costumes/Nope.svg", {
        x: 41.25,
        y: 51.4375
      }),
      new Costume("Yup", "./KaufenItemPflanze2/costumes/Yup.svg", {
        x: 41.25,
        y: 51.4375
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./KaufenItemPflanze2/sounds/Plopp.wav"),
      new Sound("Klick", "./KaufenItemPflanze2/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Item 2" },
        this.whenIReceiveItem2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Score" },
        this.whenIReceiveNewScore
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceiveItem2() {
    while (true) {
      this.visible = true;
      if (this.compare(this.stage.vars.euro, 49.9) > 0) {
        this.costume = "Yup";
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 50;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.1);
          this.effects.brightness = 0;
          this.broadcast("Item Pflanze 2");
          this.visible = false;
          return;
        }
      } else {
        this.costume = "Nope";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNewScore() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.broadcast("Item 2");
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
