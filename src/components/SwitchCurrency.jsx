import {Grid, IconButton} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { observer } from 'mobx-react';

const SwitchCurrency = observer(({ onClick }) => {
    return (
        <Grid item xs={12} md>
            <IconButton onClick={onClick}>
                <SwapHorizIcon />
            </IconButton>
        </Grid>
    );
});

export default SwitchCurrency;