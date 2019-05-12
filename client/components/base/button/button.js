import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    common: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 1px rgba(50, 20,135, .2)',
        '&:active, &:visited': {
            outline: 'none',
        },
    },
    primary: {
        background: 'linear-gradient(45deg, #42adf4 30%, #96d6ff 90%)',
    },
    save: {
        background: 'linear-gradient(45deg, #75ea98 30%, #6dc689 90%)',
    },
    cancel: {
        background: 'linear-gradient(45deg, #cc9090 30%, #a87272 90%)',
    },
    slim: {
        height: 30,
    },
};

const ButtonBase = (props) => {
    const { slim, children, classes, className, color, ...other } = props;

    const buttonClasses = classnames({
        [classes.common]: true,
        [classes[color]]: true,
        [className]: true,
        [classes.root]: true,
        [classes.slim]: slim,
    });

    return (
        <Button className={buttonClasses} {...other}>
            {children}
        </Button>
    );
};

ButtonBase.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string,
    color: PropTypes.string,
    slim: PropTypes.bool,
};

export default withStyles(styles)(ButtonBase);