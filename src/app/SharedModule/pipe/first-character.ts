import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
  name : 'firstcharacter'
})
export class FirstCharacter implements PipeTransform {
    transform(value: string, args: any[]): string {
      if (!value) { return ''; }
      return '<' + value.charAt(0) + '>';
    }
}
