import { getResourceHost } from './host';

const makeUrl = str => encodeURI(`${getResourceHost()}${str}`);

export const getDollResourceUrl = (codename, type, { skin = null } = {}) => {
  const modExp = /Mod$/gi;
  const mod = modExp.test(codename);
  let resourceName = mod && skin
    ? `pic_${codename.replace(modExp, '')}`
    : `pic_${codename}`;
  resourceName += skin ? `_${skin}` : '';
  switch (type) {
    case 'normal':
      resourceName += '';
      break;
    case 'damaged':
      resourceName += '_D';
      break;
    case 'portrait':
      resourceName += mod && skin ? '_N_mod' : '_N';
      break;
    default:
      throw Error(`unexpected resource type: ${type}`);
  }

  return makeUrl(`pic/${resourceName}.png`);
};

export const getDollTypeIconUrl = (type, rank) => makeUrl(`typeicons/gun/${type.toUpperCase()}${rank}.png`);

export const getFairyResourceUrl = codename => makeUrl(`fairy/${codename}.png`);

export const getFairyTypeIconUrl = type => makeUrl(`typeicons/fairy/${type}.png`);

export const getSkillIconUrl = codename => makeUrl(`icon/skillicon/${codename}.png`);

export const getEquipIconUrl = codename => makeUrl(`icon/equip/${codename}.png`);

// ext is 'png' or 'skel' or 'atlas'
export const getSpineResourceUrl = (codename, isStaying, skinId, ext) => {
  const resourceName = skinId ? `${codename}_${skinId}` : codename;

  return makeUrl(`spine/${resourceName.toLowerCase()}/${isStaying ? 'R' : ''}${resourceName}.${ext}`);
};
