/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KaufenItemPflanze1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Nope", "./KaufenItemPflanze1/costumes/Nope.svg", {
        x: 41.24999999999997,
        y: 51.43750125
      }),
      new Costume("Yup", "./KaufenItemPflanze1/costumes/Yup.svg", {
        x: 41.25,
        y: 51.4375
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./KaufenItemPflanze1/sounds/Plopp.wav"),
      new Sound("Klick", "./KaufenItemPflanze1/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Item" }, this.whenIReceiveItem),
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

  *whenIReceiveItem() {
    while (true) {
      if (this.toNumber(this.stage.vars.alleUpgrades) === 3) {
        this.visible = true;
        if (this.compare(this.stage.vars.euro, 249.9) > 0) {
          this.costume = "Yup";
          if (this.touching("mouse") && this.mouse.down) {
            this.stage.vars.euro -= 250;
            this.effects.brightness = 50;
            yield* this.startSound("Klick");
            yield* this.wait(0.1);
            this.effects.brightness = 0;
            this.broadcast("Item Pflanze 1");
            this.visible = false;
            return;
          }
        } else {
          this.costume = "Nope";
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNewScore() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.broadcast("Item");
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
