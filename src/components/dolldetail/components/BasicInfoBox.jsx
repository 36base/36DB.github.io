import React from 'react';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HorizonLine from '../../common/HorizonLine';
import InfoBox from '../../common/InfoBox';

const style = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 0.75,
    paddingBottom: theme.spacing.unit * 0.75,
    paddingLeft: theme.spacing.unit * 2,
  },
});

const BasicInfoBox = ({
  classes, t, armType, illust, voice,
}) => {
  const buildRow = (label, value) => [
    <Grid key="row" className={classes.container} container spacing={8}>
      <Grid item xs><Typography>{label}</Typography></Grid>
      <Grid item xs={8}><Typography>{value}</Typography></Grid>
    </Grid>,
    <HorizonLine key="hr" />,
  ];

  return (
    <InfoBox name={t('PageMessage.Basic Information')}>
      {buildRow(t('Info.Type'), t(`PageMessage.Doll.Type.${armType}`))}
      {buildRow(t('Info.Illust'), illust)}
      {buildRow(t('Info.Character Voice'), voice)}
    </InfoBox>
  );
};

export default compose(
  translate(),
  withStyles(style),
)(BasicInfoBox);
