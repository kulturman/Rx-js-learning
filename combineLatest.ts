import { combineLatest, fromEvent } from 'rxjs';

const temperatureInput = document.getElementById('temperature-input') as HTMLInputElement;
const conversionDropdown = document.getElementById('conversion-dropdown') as HTMLSelectElement;
const resultText = document.getElementById('result-text') as HTMLElement;

if (temperatureInput != null && conversionDropdown != null && resultText != null) {
    const temperatureInputEvent$ = fromEvent<any>(temperatureInput, 'input');
    const conversionInputEvent$ = fromEvent<any>(conversionDropdown, 'change');

    combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
        ([temperatureInputEvent, conversionInputEvent]) => {
            const temperatureValue = temperatureInputEvent.target['value'] as Number;
            const conversionType = conversionInputEvent.target['value'];
            temperatureInputEvent.target['value'] = temperatureValue;

            resultText.innerText = `Result of ${temperatureValue} for ${conversionType}`;
        }
    );
}
