import { satisfies } from 'semver'
import { red } from 'colors/safe'

import _package from './package'
const { engines: { node: nodeVersion } } = _package

if (!satisfies(process.version, nodeVersion)) {
  process.emitWarning(
    red(`
      For this task we are strictly recomend you to use node ${nodeVersion}.
      Now you are using node ${process.version}, if you are using any of features that not supported by node ${nodeVersion}, score won't be submitted
    `)
  );
}
