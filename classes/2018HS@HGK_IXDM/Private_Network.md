# Making a Private Network

## To Download:

* [parrotsec](https://www.parrotsec.org/download-other.php)
* [unarchiver](https://theunarchiver.com/)
* [etcher](https://etcher.io/)

## Install Parrotsec on Raspberry Pi

1. Download disk image from parrotsec [website](https://www.parrotsec.org/download-other.php) && unzip the file with [unarchiver](https://theunarchiver.com/)

2. Erase the micro SD (add instruction from)

   ```bash
   $you diskutil list
   # find your disk 
   /dev/disk0 (internal, physical):
      #:                       TYPE NAME                    SIZE       IDENTIFIER
      0:      GUID_partition_scheme                        *500.1 GB   disk0
      1:                        EFI EFI                     209.7 MB   disk0s1
      2:                 Apple_APFS Container disk2         499.9 GB   disk0s2
   
   /dev/disk1 (internal, physical):
      #:                       TYPE NAME                    SIZE       IDENTIFIER
      0:      GUID_partition_scheme                        *500.1 GB   disk1
      1:                        EFI EFI                     209.7 MB   disk1s1
      2:                  Apple_HFS HDD_02                  499.2 GB   disk1s2
   
   /dev/disk2 (synthesized):
      #:                       TYPE NAME                    SIZE       IDENTIFIER
      0:      APFS Container Scheme -                      +499.9 GB   disk2
                                    Physical Store disk0s2
      1:                APFS Volume HDD_01                  159.5 GB   disk2s1
      2:                APFS Volume Preboot                 21.3 MB    disk2s2
      3:                APFS Volume Recovery                516.1 MB   disk2s3
      4:                APFS Volume VM                      3.2 GB     disk2s4
   
   # THIS IS MY DISK
   /dev/disk4 (external, physical):
      #:                       TYPE NAME                    SIZE       IDENTIFIER
      0:     FDisk_partition_scheme                        *15.9 GB    disk4
      1:                 DOS_FAT_32 RECOVERY                1.9 GB     disk4s1
      2:                      Linux                         33.6 MB    disk4s5
      3:                 DOS_FAT_32 BOOT                    72.4 MB    disk4s6
      4:                      Linux                         8.7 GB     disk4s7
      5:                 DOS_FAT_32 SYSTEM                  536.9 MB   disk4s8
      6:                      Linux                         4.6 GB  
   
   
   $you sudo diskutil unmount /dev/diskName
   $you sudo fdisk /dev/diskName
   
   # than copy the disk image .img file to the disk
   $you sudo diskutil unmount /your/disk #(/dev/disk3s1 in this case) # unmout your disk before flashing it
   $you sudo dd bs=1m if=~/Path/To/Your/disk/image of=/dev/rdisk3
   #if = [input file] path to OS disk image
   #of = [disk name] need to keep the original name /dev/disk3s1 and adding r /dev/rdisk3 and dropping the s1 the s1 in this case refers to the partition, but we want to override the whole disk therefore we ignore partitions
   $you sudo diskutil eject /dev/rdisk3 # VERY IMPORTANT eject your disk when the disk is formatted
   ```

3. connect Raspberry pi to screen, keyboard and mouse. the default password is `toor`.

4. Connect it to the internet

   * System preferences => sharing
     * [x] Ethernet | or any other physical interface
     * [x] Internet Sharing

5. change hostname 

   ```bash
   $you sudo nano /etc/hostname
   $you sudo nano /etc/hosts
       127.0.0.1       localhost
       ::1             localhost ip6-localhost ip6-loopback
       fe00::0         ip6-localnet
       ff00::0         ip6-mcastprefix
       ff02::1         ip6-allnodes
       ff02::2         ip6-allrouters
       127.0.1.1       yano # here you change again your host name
   ```

6. Change password

   ```bash
   $you sudo passwd
   # type old password
   # type new password
   # re-type new password
   $you sudo reboot
   # reboot to apply changes
   ```
