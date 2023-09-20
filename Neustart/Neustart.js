/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Neustart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Neustart/costumes/Kostüm1.svg", {
        x: 176.99999999999963,
        y: 106.64955399674822
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Neustart/sounds/Plopp.wav"),
      new Sound("Klick", "./Neustart/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      )
    ];
  }

  *whenIReceiveGameOver() {
    this.createClone();
    this.broadcast("Musik In");
  }

  *startAsClone() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        this.broadcast("New Score");
        this.effects.brightness = 50;
        yield* this.startSound("Klick");
        yield* this.wait(0.1);
        this.visible = false;
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
  }
}
