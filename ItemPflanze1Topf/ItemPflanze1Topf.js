/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ItemPflanze1Topf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ItemPflanze1Topf/costumes/Kostüm1.svg", {
        x: 34.099999999999994,
        y: 41.60755499999999
      })
    ];

    this.sounds = [new Sound("Plopp", "./ItemPflanze1Topf/sounds/Plopp.wav")];

    this.triggers = [
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
        { name: "Item Pflanze 1" },
        this.whenIReceiveItemPflanze1
      ),
      new Trigger(Trigger.BROADCAST, { name: "Item" }, this.whenIReceiveItem),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      )
    ];
  }

  *whenIReceiveNewScore() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveItemPflanze1() {
    this.visible = true;
  }

  *whenIReceiveItem() {
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.visible = false;
    this.effects.ghost = 0;
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
  }
}
