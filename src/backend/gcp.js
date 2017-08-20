import vision from '@google-cloud/vision';

import config from '../../config/gcp';

const gcv = vision(config.vision);

export default { gcv };
