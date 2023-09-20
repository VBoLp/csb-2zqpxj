/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hardcore extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Hardcore/costumes/Kostüm1.svg", {
        x: 104,
        y: 32.1875
      })
    ];

    this.sounds = [new Sound("Plopp", "./Hardcore/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore Anfrage" },
        this.whenIReceiveHardcoreAnfrage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.hardcore = "Nein";
    this.effects.brightness = 0;
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
    this.stage.vars.hardcore = "Nein";
    this.effects.brightness = 0;
  }

  *whenIReceiveHardcoreAnfrage() {}

  *whenIReceiveHardcore() {}
}
