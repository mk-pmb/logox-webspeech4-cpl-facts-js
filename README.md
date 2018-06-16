
<!--#echo json="package.json" key="name" underline="=" -->
logox-webspeech4-cpl-facts
==========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Facts about the control panel dialog for Logox WebSpeech 4.0
<!--/#echo -->


API
---

This module exports an object with these properties:

* `sliders`: An array describing each of the sliders in the speech config
  panel, ordered from left to right.
  Each entry is an object with these properties:
  * `prop`:
    Name as used in the DLL API functions, but lowercase.
  * `label`, `unit`
  * `hotkey`: Slider can be focused with Alt+$hotkey, Tab
  * `cplMax`, `cplMin`, `default`:
    Value range configurable via the Control PaneL<!-- upper L sic -->.
  * `cplStep`: How many `unit`s it moves for arrow up/down key.
  * `pgStep`: How many `unit`s it moves for page up/down key
  * `dllStep`:
    Multiplication factor for the integer parameters expected by the DLL API.
    Basically, the DLLs take percentages as the same number (precision = 1%)
    and all other units multiplied by 10 (precision = 0.1 dB / 0.1 Hz).
  * `dllMin`, `dllMax`: Valid range for the DLL API's integer parameters.
  * `cplDist`: Difference between minimum and maximum, in `unit`s.
  * `cplSteps`: How many up arrow key presses it takes from min to max.
  * `distPgSteps`: How many page up key presses it takes from min to max.
    Meant as float precision, they just happen to be integers because all
    sliders line up perfectly.

* `sliderPropToIdx`: A dictionary object mapping the sliders' `prop`s to
  their array index.






<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
