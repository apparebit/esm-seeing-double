import module from 'module';

const cache = module._cache;
const { keys } = Object;
const loadedAtStart = new Set(keys(cache));

function loaded() {
  return keys(cache).filter(name => !loadedAtStart.has(name));
}

(async function() {
  console.log(loaded());

  console.log('\0>> @grr/one/util.js <<');
  await import('@grr/one/util.js');
  console.log();

  console.log(loaded());

  console.log('\n>> @grr/one <<');
  await import('@grr/one');
  console.log();

  console.log(loaded());
})();
