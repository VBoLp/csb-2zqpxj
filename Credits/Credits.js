/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Credits extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Credits/costumes/Kostüm1.svg", {
        x: 174.06113321386175,
        y: 186.05242813187684
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Credits/sounds/Plopp.wav"),
      new Sound("Clapping", "./Credits/sounds/Clapping.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Credits" },
        this.whenIReceiveCredits
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveCredits() {
    this.visible = true;
    yield* this.startSound("Clapping");
  }

  *whenIReceiveMen() {
    this.visible = false;
  }
}
