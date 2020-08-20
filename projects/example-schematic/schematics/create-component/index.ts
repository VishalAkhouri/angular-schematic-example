import {apply, MergeStrategy, mergeWith, move, SchematicContext, template, Tree, url} from '@angular-devkit/schematics';
import {Schema} from '../schema';
import {strings} from '@angular-devkit/core';
import {normalize} from 'path';
import {getWorkspace} from '@schematics/angular/utility/config';

function setupOptions(tree: Tree, options: Schema) {
  // get workspace details
  const workspace = getWorkspace(tree);

  // setup project
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];

    return tree;
  }
}

export function createComponent(options: Schema) {
  return (tree: Tree, context: SchematicContext) => {
    setupOptions(tree, options);

    const source = apply(url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move(normalize(`src/app/${options.path}/${strings.dasherize(options.name)}`))
    ]);

    const rule = mergeWith(source, MergeStrategy.Default);
    return rule(tree, context);
  };
}
