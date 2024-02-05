import JSZip from 'jszip'
import fs from 'fs/promises'
import path from 'path'

;(async () => {
  const buildDir = './build' // Replace with your build directory path
  const zipFilePath = await getZipFilePathName() // Replace with your desired ZIP file path
  const packageDir = './package' // Package directory path

  async function main() {
    await createPackageDir()
    await createZip()
  }

  async function createZip() {
    const zip = new JSZip()
    const files = await getAllFiles(buildDir)
    for (const file of files) {
      const content = await fs.readFile(file)
      const filePath = path.relative(buildDir, file)
      zip.file(filePath, content)
    }
    const zipContent = await zip.generateAsync({ type: 'nodebuffer' })
    await fs.writeFile(zipFilePath, zipContent)
  }

  async function getAllFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true })
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name)
        return dirent.isDirectory() ? getAllFiles(res) : res
      }),
    )
    return Array.prototype.concat(...files)
  }

  async function createPackageDir() {
    try {
      await fs.accessSync(packageDir)
    } catch (error) {
      await fs.mkdir(packageDir, { recursive: true })
    }
  }

  async function getZipFilePathName() {
    try {
      const manifest = JSON.parse(
        await fs.readFile(new URL('../build/manifest.json', import.meta.url)),
      )
      return `./package/${manifest.name.replaceAll(' ', '-')}.zip`
      //  await fs.accessSync(packageDir)
    } catch (error) {
      return `./package/extension.zip`
    }
  }

  main()
})()
