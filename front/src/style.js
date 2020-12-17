import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(0),
    },
    rightText: {
        textAlign: 'right',
    },
    centerText: {
        textAlign: 'center',
    },
    logo: {
        position: 'absolute',
    },
    logoImage: {
        width: '100%',
    },
    noPadding: {
        padding: '0px !important',
    },
    whiteColor: {
        color: 'white',
    },
}));

export {
    useStyles
};