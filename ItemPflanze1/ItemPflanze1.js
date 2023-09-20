/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ItemPflanze1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ItemPflanze1/costumes/Kostüm1.svg", {
        x: 38.799846121678144,
        y: 41.07041772136748
      })
    ];

    this.sounds = [new Sound("Plopp", "./ItemPflanze1/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Score" },
        this.whenIReceiveNewScore
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Item Pflanze 1" },
        this.whenIReceiveItemPflanze1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Item Pflanze 1" },
        this.whenIReceiveItemPflanze2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenIReceiveNewScore() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveItemPflanze1() {
    this.visible = true;
    yield* this.wait(0.1);
    for (let i = 0; i < 60; i++) {
      this.sprites["KugelItemPflanze1"].createClone();
      yield* this.wait(0.5);
      yield;
    }
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.visible = false;
    this.broadcast("Item");
    this.effects.ghost = 0;
  }

  *whenIReceiveItemPflanze2() {
    this.direction = 60;
    yield* this.wait(0.1);
    for (let i = 0; i < 60; i++) {
      this.direction += 1;
      yield* this.wait(0.5);
      yield;
    }
    this.direction = 60;
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
