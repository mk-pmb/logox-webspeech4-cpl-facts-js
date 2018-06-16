/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function logoxWebSpeech4CplFacts() {
  var EX = {};

  EX.sliders = [
    { prop:     'volume',
      label:    'Lautstärke',
      hotkey:   'l',
      unit:     'dB',
      cplMax:   12,
      cplMin:   -98,
      default:  0,
      cplStep:  1,
      pgStep:   22,
      dllStep:   10,
      },
    { prop:     'pitch',
      label:    'Tonhöhe',
      hotkey:   't',
      unit:     'Hz',
      cplMax:   100,
      cplMin:   -100,
      default:  0,
      cplStep:  10,
      pgStep:   40,
      dllStep:   10,
      },
    { prop:     'speed',
      label:    'Tempo',
      hotkey:   'p',
      unit:     '%',
      cplMax:   300,
      cplMin:   10,
      default:  100,
      cplStep:  10,
      pgStep:   50,
      dllStep:   1,
      },
    { prop:     'intonation',
      label:    'Intonation',
      hotkey:   'i',
      unit:     '%',
      cplMax:   300,
      default:  100,
      cplMin:   0,
      cplStep:  10,
      pgStep:   60,
      dllStep:   1,
      },
    { prop:     'roughness',
      label:    'Rauhigkeit',
      hotkey:   'r',
      unit:     'Hz',
      cplMax:   100,
      cplMin:   0,
      default:  0,
      cplStep:  1,
      pgStep:   20,
      dllStep:   10,
      },
  ];

  EX.sliderPropToIdx = {};
  EX.sliders.forEach(function (sl, idx) {
    EX.sliderPropToIdx[sl.prop] = idx;
    sl.cplDist = sl.cplMax - sl.cplMin;
    sl.cplSteps = sl.cplDist / sl.cplStep;
    sl.distPgSteps = sl.cplDist / sl.pgStep;
    sl.dllMin = sl.cplMin * sl.dllStep;
    sl.dllMax = sl.cplMax * sl.dllStep;
  });





















  return EX;
}

module.exports = logoxWebSpeech4CplFacts();
