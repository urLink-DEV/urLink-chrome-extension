import {withStyles} from '@material-ui/styles'
import { KeyboardDateTimePicker } from '@material-ui/pickers'

export const DatePickerWithStyles = withStyles((theme) => ({
  '@global': {
    'input.MuiInputBase-input.MuiInput-input.MuiInputBase-inputAdornedEnd': {
      display: 'none',
    },
    'div.MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
      marginLeft: 0,
    },
    'button.MuiButtonBase-root.MuiIconButton-root': {
      padding: 3,
    }
  },
}))(KeyboardDateTimePicker);