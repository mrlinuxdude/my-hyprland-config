import {
  Button,
  Label,
  CircularProgress,
} from 'resource:///com/github/Aylur/ags/widget.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';

export const BatteryWidget = () => {
  const label = Label({
    className: 'battery-inner',
    label: '',
  });

  const button = Button({
    className: 'unset no-hover',
    child: label,
    onClicked: () => showHardwareMenu(),
  });

  return CircularProgress({
    className: 'battery',
    child: button,
    startAt: 0,
    rounded: false,
    // inverted: true,
  }).hook(Battery, (batteryProgress) => {
    if (Battery.charging) {
      label.className = 'battery-inner-charging';
    } else {
      label.className = 'battery-inner';
    }
    batteryProgress.value = Battery.percent / 100;
    label.tooltipMarkup = `<span weight='bold' foreground='#FF8580'>نسبة البطارية (${Battery.percent}%)</span>`;
  });
};

