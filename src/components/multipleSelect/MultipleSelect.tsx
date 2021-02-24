import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useTheme, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const eventTypes = ['sport', 'culture', 'health'];

function getStyles(type: string, types: string[], theme: Theme) {
  return {
    fontWeight:
      types.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const MultipleSelect = (props: any) => {
  const { onFilterByEventType } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [types, setTypes] = React.useState<string[]>([]);

  useEffect( () => {
    onFilterByEventType(types);
  } );
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {

      setTypes(event.target.value as string[]);
  };

  return (
    <div>
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          color="primary"
          variant="outlined"
          value={types}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if ((selected as string[]).length === 0) {
              return <em>Event Type</em>;
            }
            return (selected as string[]).join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Event Type</em>
          </MenuItem>
          {eventTypes.map((type) => (
            <MenuItem
              key={type}
              value={type}
              style={getStyles(type, types, theme)}
            >
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};